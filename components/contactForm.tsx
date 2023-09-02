'use client'
import Image from "next/image";
import React, { useState } from "react";

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import mapPin from "../public/mapPin.svg"
import mail from "../public/mail.svg"
import send from "../public/send.svg"
import phone from "../public/phone.svg"


const ContactForm = () => {

  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

    // Update inputs value
    const handleParam = () => (e: any) => {
      const name = e.target.name;
      const value = e.target.value;
      setQuery((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };

   // Form Submit function
   const formSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/ac6a5e2c-5e5f-4122-9f8a-bfd66ac6b94f", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };

  return(
    <>
    <div className="flex flex-row xs:flex-col my-10 mx-32 xs:mx-8">

      <hr className="mb-10 border border-[#0179a8]" />

      <div className="flex flex-col flex-[60%] shadow-lg rounded pl-20 p-10 mb-4 xs:pl-0">

        <span className="text-4xl text-[#3b7ddd] font-semibold pb-8">Get In Touch</span>

        <form onSubmit={formSubmit} className="flex flex-col gap-y-6 pb-4 relative right-0">
          
          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email"
              placeholder="Email" 
              value={query.email}
              className="w-full"
              onChange={handleParam()}
            />
          </div>
          
          <div className="grid w-full max-w-md items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name"
              placeholder="Username" 
              value={query.name}
              onChange={handleParam()}
            />
          </div>

          <div className="grid w-full max-w-md items-center gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea 
              placeholder="Type your message here." 
              id="message"
              name="message"
              value={query.message}
              onChange={handleParam()} 
            />
          </div>

          <div className="grid w-full max-w-md items-center gap-1.5">
          <Button type="submit" className="gap-x-4 text-base bg-[#3b7ddd] hover:bg-[#0179a8]">
            Send message
            <Image 
              src={send}
              width={18}
              height={18}
              alt=""
            />
          </Button>
          </div>  
        </form>

      </div>


      <div className="flex flex-[40%] mt-10 w-full">
      <div className="flex flex-col w-full bg-[#3b7ddd] px-10 py-14 text-white shadow-2xl rounded gap-y-8">
        <h2 className="text-4xl font-semibold pb-4">Contact us</h2>

        <div className="flex flex-row items-center gap-2">
          <Image 
            src={mapPin} 
            alt=""
            width={20}
            height={20}
          />
          <h3 className="text-md font-semibold">Address: </h3>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Image 
            src={phone} 
            alt=""
            width={20}
            height={20}
          />
          <h3 className="text-md font-semibold">Phone: </h3>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Image 
            src={mail} 
            alt=""
            width={20}
            height={20}
          />
          <h3 className="text-md font-semibold">Email: </h3>
        </div>
      </div>
      </div>
      
    </div>
  </>  
  )
}

export default ContactForm;