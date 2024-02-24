import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
export default function Events() {
    return (
      <div className="h-screen w-screen bg-white rounded-t-2xl rounded-2xl">
        <div >
            <div className="w-fill h-18  flex justify-end pr-10">
                <Icons icon={<MdEvent className="h-10 w-10 text-black"/>}/>
                <Icons icon={<TbBell className="h-10 w-10 text-black font-bold"/>}/>
                <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="" className="rounded-full h-10 w-10 m-5"/>
            </div>
        </div>
        <div className="flex content-center">
            <h1 className=" text-xl text-blue-900 font-bold text-center self-center">Events</h1>
            <Icons icon={<MdEvent className="h-10 w-10 text-black "/>}/>

        </div>
        <hr className="border-black w-64"/>
        <div className="flex justify-center mt-0 ">            
            <div className=" max-w-64 p-5 bg-blue-500 rounded-t-2xl rounded-2xl">
            <div>
       <div className ="flex justify-self-start ">
       <img src="/images/download (1).jpg" alt="" className=" h-10 w-10 m-5 rounded-md" />

        <h1 className="text-sm text-black text-center self-center">Cyber X Secure Club</h1>
        </div>
          
          <p className=" text-base text-black flex justify-self-auto">Hello dear all , we are cyberxsecure club. here are some of our events pictures which we took on our session. Hope you like our project. Nice to meet you.</p>
          <div className=" flex justify-center">
          <img src="/images/WhatsApp Image 2024-02-12 at 00.41.59_12e8e928.jpg" alt=" " className=" h-20 w-20 m-5 " />
          </div>
         
          
      </div>
            </div>

            </div> 
                       
    
      </div>
   
    );
  }
  function Icons(props:{ icon:any}){
    return(
        <div className="">
           
           <div className="m-5"> {props.icon}</div>

        </div>
            );
  }