"use client";
import { useState } from "react";
import { analytics } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function UploadPage() {
  const [fileupload, setfileupload] = useState<FileList | null>(null);

  const upload = async() => {
    console.log(fileupload);
    if(fileupload !== null) {
      const yourFileName = fileupload[0].name;
      const fileref = ref(analytics, 'images/' + yourFileName); 
      uploadBytes(fileref, fileupload[0]).then((data)=>{
        getDownloadURL(data.ref);
      })
    }else{
      alert("Please select file");
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
