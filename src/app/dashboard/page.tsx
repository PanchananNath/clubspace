'use client'
import Dashboard from "@/components/common/dashboard";
import { useEffect, useState } from "react";
import PopupForm from "@/components/common/popupForm";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Navbar from "@/components/common/navbar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/app/firebase';
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getAuth } from "firebase-admin/auth";


export default function DashboardPage() {
  const [showPopup, setShowPopup] = useState(true); 
  const router = useRouter();

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        window.alert('user signed in');
      }
      else {
        window.alert('user not signed in');
      }
    });

    
    return () => unsubscribe();
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSubmit = () => {
    console.log("form submitted");
    togglePopup();
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      router.push('/signin')
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    
    <main className="flex w-full items-center justify-center p-1">
      <Navbar />
      <div className="bg-white relative h-screen w-full rounded-2xl bg-static overflow-hidden">
        <Image
          alt="Mountains"
          src={logo}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          className="fixed top-0 left-0 w-full h-full z-0 object-contain opacity-30"
        /> 

        <div className="px-11 relative mt-12">
          <h2 className="text-2xl text-[#365486] font-bold">Hello user!</h2>
          <div className="text-2xl text-[#365486] font-bold  mt-20 mb-4">
            My Clubs
          </div>
          <Dashboard />
          
          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {showPopup && <PopupForm onClose={togglePopup} onSubmit={handleSubmit} />}
          </div>
          {/* End Popup */}

          <Link href={'./myaccount'} ><button className="bg-blue-500 p-1 w-24 cursor-pointer z-50 mt-5">Signout</button></Link>
        </div>
        
      </div>
    </main>
  );
}
