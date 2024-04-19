import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";  
import { BiDislike } from "react-icons/bi";
import { BiCommentDetail } from "react-icons/bi";
export default function Events() {
    return (
      <div className="min-h-min w-screen bg-white rounded-t-2xl rounded-2xl">
        <div >
            <div className="w-fill h-18  flex justify-end pr-10">
                <Icons icon={<MdEvent className="h-10 w-10 text-black"/>}/>
                <Icons icon={<TbBell className="h-10 w-10 text-black font-bold"/>}/>
                <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="" className="rounded-full h-10 w-10 m-5"/>
            </div>
        </div>
        <div className="flex justify-start">
            <h1 className=" text-xl text-blue-900 font-bold text-center self-center p-2">Events</h1>
            <Icons icon={<MdEvent className="h-10 w-10 text-black "/>}/>

        </div>
        <hr className="border-black w-64 "/>
        <div className="flex justify-center mt-0 ">            
            <div className=" w-11/12 min-h-min p-3 bg-blue-300 rounded-t-2xl rounded-2xl m-3">
            <div>
       <div className ="flex justify-self-start ">
       <img src="/images/download (1).jpg" alt="" className=" h-14 w-14 m-5 rounded-md" />

        <h1 className="text-lg text-black text-center self-center">Cyber X Secure Club</h1>
        </div>
          
          <p className=" text-base text-black flex justify-self-auto">Hello dear all , we are cyberxsecure club. here are some of our events pictures which we took on our session. Hope you like our project. Nice to meet you.</p>
          <div className=" flex justify-center">
          <img src="/images/WhatsApp Image 2024-02-12 at 00.41.59_12e8e928.jpg" alt=" " className=" h-screen w-10/11 m-5 " />
          </div>
          
          <div className=" h-20 flex justify-around items-center pl-3 pr-3 mt-3">
        
            <div className="bg-blue-900 h-11 w-28 rounded-t-xl rounded-xl place-items-center flex">
            <Icons icon={<AiOutlineLike className=" h-5 w-5 "/>}/>
            <Icons icon={<BiDislike className="h-5 w-5  place-items-center " />}/>
            </div>
            <div className="bg-blue-900 h-11 w-28 rounded-t-xl rounded-xl flex">
            <Icons icon={<BiCommentDetail className="h-6 w-6 flex justify-center" />}/>
            <div className=" text-base text-white text-center self-center ">Query</div>
                     
              </div>
        
            <div className="w-fill h-18 justify-end pr-18 ">
            <div className=" bg-blue-900 h-11 w-28 rounded-t-xl rounded-xl text-center p-2 ">Register</div>
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