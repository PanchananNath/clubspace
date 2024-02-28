import Image from "next/image";
import { MdEvent } from "react-icons/md";
import { TbBell } from "react-icons/tb";

export default function Account() {
  return (
    <div style={{ backgroundImage: 'url(./images/Background.png)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <div id="main" className="min-h-screen min-w-screen bg-white ml-20vw pl-5 text-blue-700 font-sans grid grid-cols-5 grid-rows-10">
        <header className="flex justify-between items-center col-span-full row-span-1">
          <p className="inline-block text-2xl mt-5 ml-5">Hello User!</p>
            <div className="w-fill h-18  flex justify-end pr-10">
            <MdEvent className="h-10 w-10 text-black mr-3"/>
            <TbBell className="h-10 w-10 text-black font-bold mr-3"/>
            <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="" className="rounded-full h-10 w-10"/>
          </div>
        </header>
        <div id="content" className="ml-5 col-start-1 col-span-2 row-span-6">
          <h2 className="text-2xl mt-10 mb-10">My Account</h2>
          <a href="#" target="_blank" className="block">
            <div id="club" className="w-96 h-24 bg-blue-300 flex justify-start items-center rounded-md mb-6">
              <img src="http://upload.wikimedia.org/wikipedia/commons/d/d4/Cat_March_2010-1a.jpg" alt="logo" className="w-20 h-20 rounded-full ml-3 mr-2"/>
              <p className="text-base text-black">UserName <br /> u22cse436@cit.ac.in</p>
            </div>
          </a>
          <a href="#" target="_blank" className="block">
            <div id="options" className="w-96 h-12 bg-blue-200 flex justify-start items-center rounded-md mb-2">
              <i className="far fa-user mr-3"></i>
              <p className="text-base text-black">Personal Details</p>
            </div>
          </a>
          <a href="#" target="_blank" className="block">
            <div id="options" className="w-96 h-12 bg-blue-200 flex justify-start items-center rounded-md mb-2">
              <i className="fas fa-key mr-3"></i>
              <p className="text-base text-black">Security Settings</p>
            </div>
          </a>
          <a href="#" target="_blank" className="block">
            <div id="options" className="w-96 h-12 bg-blue-200 flex justify-start items-center rounded-md mb-2">
            <i className="far fa-user mr-3"></i>
              <p className="text-base text-black">Resume</p>
            </div>
          </a>
          <a href="#" target="_blank" className="block">
            <div id="options" className="w-96 h-12 bg-blue-200 flex justify-start items-center rounded-md mb-2">
              <p className="text-base text-black"></p>
            </div>
          </a>
        </div>
      <div id="calendar" className="row-span-4 col-start-4 col-end-6 mt-10 mr-16">
        <div className="bg-cyan-50 shadow-md rounded-lg">
        
          <div className="px-6 py-3 border-b text-center">
            <span className="text-lg font-bold text-gray-800">january 2024</span>
          </div>

         
          <div className="grid grid-cols-7 text-center border-b">
            <div className="p-3">Sun</div>
            <div className="p-3">Mon</div>
            <div className="p-3">Tue</div>
            <div className="p-3">Wed</div>
            <div className="p-3">Thu</div>
            <div className="p-3">Fri</div>
            <div className="p-3">Sat</div>
          </div>

          <div className="grid grid-cols-7 text-center">
           
            <div className="p-3"></div>
            <div className="p-3"></div>
            <div className="p-3"></div>
           
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
  );
}