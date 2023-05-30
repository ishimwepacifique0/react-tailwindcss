import React from "react";
import { useState } from "react";
import './index.css'
import { BsSpotify } from "react-icons/bs";
function App() {
  const [email, setEmail] = useState('')
  console.log(email)
  function getValue(e) {
    e.preventDefault()
    console.log(email)
  }
  return (
    <div className="bg-indigo-900 h-screen w-screen">
      <div className="flex flex-col justify-center ">
        <h2 className="font-bold text-3xl text-gray-100 text-center mt-4">Get in touch</h2>
        <p className="text-gray-200 text-center">Contact us for a quote, help to join the team</p>
      </div>
      <div className="flex flex-row justify-between justify-center w-80 mx-auto my-4">
        <div className="px-4 py-4 hover:bg-red-400 hover:rounded cursor-pointer">
          <BsSpotify className="text-center text-white mx-auto" />
          <p className="text-white">123steet349</p>
        </div>
        <div className="px-4 py-4 hover:bg-red-400 hover:rounded cursor-pointer">
          <BsSpotify className="text-center text-white mx-auto" />
          <p className="text-white">123steet349</p>
        </div>
        <div className="px-4 py-4 hover:bg-red-400 hover:rounded cursor-pointer">
          <BsSpotify className="text-center text-white mx-auto" />
          <p className="text-white">123steet349</p>
        </div>
      </div>
      <div className="bg-gray-100 w-1/2 mx-auto px-5 py-5 rounded">
        <div className="">
          <h1 className="font-bold">Contact form</h1>
          <div className="flex flex-row ">
            <div className="flex flex-col my-2 mx-4">
              <div className="flex  flex-col">
                <label className="text-gray-700 my-1">Your name</label>
                <input type="text" placeholder="Name" className=" border border-gray-300 rounded-lg px-3 py-1 dark:focus:bg-gray-200 dark:focus:border-0 " />
              </div>
              <div className="flex  flex-col">
                <label className="text-gray-700 my-1">Mail</label>
                <input type="text" placeholder="Mail" className=" border border-gray-300 rounded-lg px-3 py-1 dark:focus:bg-gray-200 dark:focus:border-0 " />
              </div>
              <div className="flex  flex-col">
                <label className="text-gray-700 my-1">Phone</label>
                <input type="text" placeholder="Phone" className=" border border-gray-300 rounded-lg px-3 py-1 dark:focus:bg-gray-200 dark:focus:border-0 " />
              </div>
            </div>
            <div className="flex  flex-col ">
              <label className="text-gray-700 my-1">Message</label>
              <textarea placeholder="Your message"  className=" h-48 border border-gray-300 rounded-lg px-3 py-1 dark:focus:bg-gray-200 dark:focus:border-0 "/>
            </div>
          </div>
          <div>
            <label>Service</label>
            <button>Web design</button>
            <button>Web design</button>
            <button>Web design</button>
            <button>Web design</button>
          </div>
          <div>
            <button>Send message</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default App;
