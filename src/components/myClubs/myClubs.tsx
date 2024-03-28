import Image from "next/image";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";

export default function Test() {
    return(
        <body className="m-0 p-0 box-border">
            <div className="container w-auto min-h-screen grid grid-cols-6">
                <div className="sidebar bg-blue-950 col-span-1"></div>
                <div className="main p-5 w-auto h-auto bg-white text-blue-900 rounded-lg font-san col-span-5">
                    <header className="col-span-full row-span-1">
                        {/* <p className="inline-block text-2xl mt-5 ml-5">Welcome back, User!</p> */}
                        <div className="col-span-full h-18 flex">
                            <p className="text-2xl">Welcome back, User!</p>
                            <MdEvent className="h-10 w-10 text-black mr-3 cursor-pointer"/>
                            <TbBell className="h-10 w-10 text-black font-bold mr-3 cursor-pointer"/>
                            <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="profile pic" className="mr-3 rounded-full h-10 w-10 cursor-pointer"/>
                        </div>
                    </header>
                    <div className="content grid grid-cols-3">
                    <div className="myclubs ml-5 col-span-1">
                        <h2 className="text-4xl my-10">My Clubs</h2>
                        <a href="http://technicalclubs.cit.ac.in/security.html" target="_blank" className="no-underline">
                            <div id="club" className="w-80 h-24 bg-cyan-300 mb-6 rounded-lg text-black flex items-center">
                            <img src="https://media.licdn.com/dms/image/D4D0BAQG2bvQZMpjKYg/company-logo_200_200/0/1694538299913?e=2147483647&v=beta&t=fi17Jf6UUNfZ71eKp423YRBslxeq25h66MCiYQ7O5CI" alt="logo" className="w-20 h-20 rounded-lg relative right-3 ml-6"/>
                                <p className="text-xl no-underline text-black">Cyber X Secure Club</p> 
                            </div>
                        </a>
                        <a href="http://technicalclubs.cit.ac.in/devcom.html" target="_blank" className="no-underline">
                            <div id="club" className="w-80 h-24 bg-cyan-300 mb-6 rounded-lg text-black flex items-center">
                                <img src="https://media.licdn.com/dms/image/C560BAQEcHD6UhiBLmw/company-logo_200_200/0/1648636313082?e=2147483647&v=beta&t=kRpSSF8WI3nB7E0ZmAoPAHsw0hbyB12lj847jjpEluc" alt="logo" className="w-20 h-20 rounded-lg relative right-3 ml-6"/>
                                <p className="text-2xl">DevCom Club</p>
                            </div> 
                        </a>
                        <a href="http://technicalclubs.cit.ac.in/ai.html" target="_blank">
                            <div id="club" className="w-80 h-24 bg-cyan-300 mb-6 rounded-lg text-black flex items-center">
                                <img src="https://media.licdn.com/dms/image/D5603AQFlFq9BFDVOFQ/profile-displayphoto-shrink_200_200/0/1693930664921?e=2147483647&v=beta&t=EVGhxHvTzgLDZIfikFhvTJso1QY_s1NSKexivqFT-Vw" alt="logo" className="w-20 h-20 rounded-lg relative right-3 ml-6"/>
                                <p className="text-2xl">AI Club</p>
                            </div>
                        </a>
                        <div id="explore" className="w-48 h-7 bg-blue-900 rounded-md text-white relative left-16 flex justify-center items-center cursor-pointer">
                            <small>Explore Clubs</small>
                        </div>
                    </div>

                    <div id="calendar" className="row-span-4 col-start-3 col-end-4 mt-10 mr-16">
                        <div className="bg-cyan-50 shadow-md rounded-lg">
                            {/* <!-- Month and Year Header --> */}
                            <div className="px-6 py-3 border-b text-center">
                                <span className="text-lg font-bold text-gray-800">February 2024</span>
                            </div>

                            {/* <!-- Weekdays Header --> */}
                            <div className="grid grid-cols-7 text-center border-b">
                                <div className="p-3">Sun</div>
                                <div className="p-3">Mon</div>
                                <div className="p-3">Tue</div>
                                <div className="p-3">Wed</div>
                                <div className="p-3">Thu</div>
                                <div className="p-3">Fri</div>
                                <div className="p-3">Sat</div>
                            </div>

                            {/* <!-- Calendar Days --> */}
                            <div className="grid grid-cols-7 text-center">
                                {/* <!-- Dummy Days for spacing --> */}
                                <div className="p-3"></div>
                                <div className="p-3"></div>
                                <div className="p-3"></div>
                                {/* <!-- Days --> */}
                                <div className="p-3">1</div>
                                <div className="p-3">2</div>
                                <div className="p-3">3</div>
                                <div className="p-3">4</div>
                                <div className="p-3">5</div>
                                <div className="p-3">6</div>
                                <div className="p-3">7</div>
                                <div className="p-3">8</div>
                                <div className="p-3">9</div>
                                <div className="p-3">10</div>
                                <div className="p-3">11</div>
                                <div className="p-3">12</div>
                                <div className="p-3">13</div>
                                <div className="p-3">14</div>
                                <div className="p-3">15</div>
                                <div className="p-3">16</div>
                                <div className="p-3">17</div>
                                <div className="p-3">18</div>
                                <div className="p-3">19</div>
                                <div className="p-3">20</div>
                                <div className="p-3">21</div>
                                <div className="p-3">22</div>
                                <div className="p-3">23</div>
                                <div className="p-3">24</div>
                                <div className="p-3">25</div>
                                <div className="p-3">26</div>
                                <div className="p-3">27</div>
                                <div className="p-3">28</div>
                                <div className="p-3">29</div>
                                <div className="p-3">30</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </body>
    );
}