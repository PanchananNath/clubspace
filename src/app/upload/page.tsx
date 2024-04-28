"use client";
import { useState } from "react";
import { analytics } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import ChangeUserName from "@/components/common/changeUserName";
import AddPhone from "@/components/common/addPhone";
import UpdateEmail from "@/components/common/updateEmail";
import UpdatePassword from "@/components/common/updatePassword";
import UpdateResume from "@/components/common/updateResume";


export default function UploadPage() {
  const [fileupload, setfileupload] = useState<FileList | null>(null);

  const upload = async() => {
    console.log(fileupload);
    if(fileupload !== null) {
      const yourFileName = fileupload[0].name;
      const fileref = ref(analytics, 'images/' + yourFileName); 
      uploadBytes(fileref, fileupload[0]).then((data)=>{
        const url = getDownloadURL(data.ref);
        console.log("url: ", url);
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
      <UpdateResume/>
    </div>
  );
}