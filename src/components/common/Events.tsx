import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";  
import { BiDislike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
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
        <div className="flex justify-start">
            <h1 className=" text-xl text-blue-900 font-bold text-center self-center">Events</h1>
            <Icons icon={<MdEvent className="h-10 w-10 text-black "/>}/>

        </div>
        <hr className="border-black w-64"/>
        <div className="flex justify-center mt-0 ">            
            <div className=" w-11/12 max-h-screen p-3 bg-blue-500 rounded-t-2xl rounded-2xl m-3">
            <div>
       <div className ="flex justify-self-start ">
       <img src="/images/download (1).jpg" alt="" className=" h-10 w-10 m-5 rounded-md" />

        <h1 className="text-sm text-black text-center self-center">Cyber X Secure Club</h1>
        </div>
          
          <p className=" text-base text-black flex justify-self-auto">Hello dear all , we are cyberxsecure club. here are some of our events pictures which we took on our session. Hope you like our project. Nice to meet you.</p>
          <div className=" flex justify-center">
          <img src="/images/WhatsApp Image 2024-02-12 at 00.41.59_12e8e928.jpg" alt=" " className=" h-20 w-20 m-5 " />
          </div>
          
          <div className=" h-20 bg-blue-300 flex">
            <div className="bg-green-900 h-11 w-28 rounded-t-xl rounded-xl">
            <Icons icon={<AiOutlineLike className=" h-2 w-2"/>}/>
            <Icons icon={<BiDislike className="h-2 w-2" />}/>
            </div>
            <div className="bg-pink-300 h-11 w-28">
              <Icons icon={<BiCommentDetail className="h-10 w-10" />}/>
            
            <h3>Query</h3></div>
            <div className="w-fill h-18 justify-end pr-18 ">
            
            <div className=" bg-red-900 h-11 w-28 rounded-t-xl rounded-xl text-center p-2 m-5">Register</div>
            </div>
            
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