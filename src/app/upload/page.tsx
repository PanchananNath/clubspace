"use client";
import { useEffect, useState } from "react";
import { analytics, auth } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from "firebase/auth";

export default function UploadPage() {
  const [fileupload, setfileupload] = useState<FileList | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null); // State variable to store the download URL
  const [uid, setUid] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if(user) {
            const userId = user.uid; 
            setUid(userId);
        }
    });
    return () => unsubscribe();
  }, []);

  const upload = async() => {
    console.log(fileupload);
    if(fileupload !== null) {
      const yourFileName = fileupload[0].name;
      const fileref = ref(analytics, 'images/' + yourFileName); 
      uploadBytes(fileref, fileupload[0]).then((data)=>{
        getDownloadURL(data.ref).then((url) => {
          setDownloadUrl(url);
          if(uid) {
            insertDownloadUrlToApi(uid, url);
          }else{
            console.log("uid null");
          }
        }).catch((error) => {
          console.log("Error getting downloadUrl", error);
        });
      })
    }else{
      alert("Please select file");
    }
  };

  // const upload = async () => {
  //   if (!fileupload) {
  //     alert("Please select a file");
  //     return;
  //   }

  //   const yourFileName = fileupload[0].name;
  //   const fileref = ref(analytics, 'images/' + yourFileName);

  //   try {
  //     const data = await uploadBytes(fileref, fileupload[0]);
  //     const url = await getDownloadURL(data.ref);
  //     if (uid) {
  //       await insertDownloadUrlToApi(uid, url);
  //       console.log("Download URL inserted successfully");
  //     } else {
  //       console.error("UID is null");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading file or inserting download URL:", error);
  //     alert("An error occurred. Please try again later.");
  //   }
  // };

  

  const insertDownloadUrlToApi = async (uid: string, url: string) => {
    try {
      // Make your API call here to insert the download URL
      await fetch('api/insert', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: uid,
          downloadUrl: url,
          // You can include any additional data you need to send to your API
        })
      });

      console.log("Download URL inserted successfully");
    } catch (error) {
      console.error("Error inserting download URL to API:", error);
    }
  };

  

  return (
    <div>
      <input
        type="file"
        onChange={(event) => setfileupload(event.target.files)}
      ></input>

      <button onClick={upload}>upload</button>
    </div>
  );
}