import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";
import { BiCommentDetail } from "react-icons/bi";
import Image from "next/image";
import LikeButton from "./likeButton";

export default function Events1(){
  return(
     <div className="h-screen w-full bg-white relative overflow-y-scroll  ">

      <div className="h-content w-full bg- p-5">
            <div className="flex justify-end items-center gap-3">
                <MdEvent className="h-10 w-10"/>
                <TbBell className="h-10 w-10"/>
                <Image 
                      src={'/logo.png'}
                      alt="logo"
                      height={40}
                      width={40}
                      className="rounded-full border-2 border-black"  
                  />
            </div>
            <div className="flex items-center">
              <h1 className="font-bold text-2xl">Events</h1>
              <MdEvent className="h-10 w-10"/>
            </div>
            <hr className="border-black"/>
            <div className="bg-secondary p-3 m-5 rounded-xl shadow-2xl">
                  <div className="flex items-center mb-2">
                      <Image 
                          src={'/logo.png'}
                          alt="logo"
                          height={40}
                          width={40}
                          // className="rounded-full"  
                      />
                      <h1>Cyber X Secure Club</h1>
                  </div>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit dolore sequi, eius reprehenderit maxime perferendis architecto veritatis distinctio blanditiis. Dolores tempora, rerum mollitia iste quod voluptates exercitationem aperiam ipsa odio, sunt, nesciunt pariatur hic! Possimus molestias error sit eveniet vero inventore iusto hic molestiae odit. Quae quod iste autem facilis. </p>
                  <div className="flex justify-center items-center mb-5 mt-5">
                      <Image 
                              src={'/logo.png'}
                              alt="logo"
                              height={400}
                              width={350}
                              className="border border-black"  
                        />
                  </div>
                  <hr className="border-black"/>
                  <div className="flex justify-evenly items-center mt-5 mb-5">
                      <span className="bg-primary p-2 w-32   flex items-center justify-center gap-3 rounded-lg">
                        <LikeButton/>
                      </span>
                      <button className="bg-primary flex items-center p-2 w-32 justify-center gap-3 text-white rounded-lg">
                        <BiCommentDetail/>
                        Query
                      </button>
                      <button className="bg-primary p-2 w-32 text-white rounded-lg">
                        Register
                      </button>
                  </div>
            </div>  
      </div>
      <div className="h-content w-full bg-gree  ">
      <div className="h-full w-full bg- p-5">
              {/* <div className="flex justify-end items-center gap-3">
                  <MdEvent className="h-10 w-10"/>
                  <TbBell className="h-10 w-10"/>
                  <Image 
                        src={'/logo.png'}
                        alt="logo"
                        height={40}
                        width={40}
                        className="rounded-full border-2 border-black"  
                    />
              </div> */}
            {/* <div className="flex items-center">
              <h1 className="font-bold text-2xl">Events</h1>
              <MdEvent className="h-10 w-10"/>
            </div> */}
            {/* <hr className="border-black"/>   */}
            <div className="bg-secondary p-3 m-5 rounded-xl shadow-2xl">
                  <div className="flex items-center mb-2">
                      <Image 
                          src={'/logo.png'}
                          alt="logo"
                          height={40}
                          width={40}
                          // className="rounded-full"  
                      />
                      <h1>AI Club</h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa non, dolor soluta similique ut animi exercitationem sequi natus repellat quam doloremque enim. Sequi fugiat aperiam eveniet quod repellat aut ducimus iusto, iste praesentium tempore necessitatibus magnam esse maxime labore quam asperiores quaerat! Doloremque debitis deserunt impedit ut harum eligendi in, aliquid nulla amet at quaerat assumenda error eum explicabo corrupti ea voluptas, sunt, quo veniam. Soluta quos repellat ducimus perspiciatis saepe fugiat doloremque hic dolore exercitationem optio? Sequi id, voluptates nobis tempora dignissimos doloremque, illo minus omnis aut optio quis vitae perferendis adipisci quas itaque? Cumque vitae neque nulla ducimus saepe perferendis quam temporibus, provident itaque voluptates harum necessitatibus consequuntur quaerat reprehenderit fuga voluptatibus reiciendis animi odit natus laborum quibusdam optio ab! Similique accusantium nihil blanditiis vel ad. Dolore impedit enim accusantium quos dicta! Perspiciatis, velit vel dignissimos excepturi atque quisquam temporibus ipsa architecto accusamus fuga consequuntur quos voluptas ratione. Sit, modi est ut doloribus expedita eos illo libero placeat nemo obcaecati. Sed facere eos dolores necessitatibus eveniet excepturi officiis, perspiciatis repellendus cum culpa provident cupiditate ab. Quae, aut. Assumenda voluptatum fuga ea qui, doloremque, facilis, modi voluptatibus vel nemo culpa autem labore dignissimos? Fuga tenetur dolores atque reprehenderit magni.</p>
                  <div className="flex justify-center items-center mb-5 mt-5">
                      <Image 
                              src={'/logo.png'}
                              alt="logo"
                              height={400}
                              width={350}
                              className="border border-black"  
                        />
                  </div>
                  <hr className="border-black"/>
                  <div className="flex justify-evenly items-center mt-5 mb-5">
                      <span className="bg-primary p-2 w-32   flex items-center justify-center gap-3 rounded-lg">
                        <LikeButton/>
                      </span>
                      <button className="bg-primary flex items-center p-2 w-32 justify-center gap-3 text-white rounded-lg">
                        <BiCommentDetail/>
                        Query
                      </button>
                      <button className="bg-primary p-2 w-32 text-white rounded-lg">
                        Register
                      </button>
                  </div>
            </div>  
      </div>
      </div>
      {/* <div className="h-full w-full bg-red-200"></div>   */}

     </div>
  );
}