import React from 'react';
import img1 from '../../img/contactus.png';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';
import Footer from '../../Componenets/Welcome/Footer/Footer';
function Contact() {
  const submitmsg=useRef();
  function submit()
  {
    
    console.log("Submitted");
       console.log(submitmsg);
       submitmsg.current.style.display="block";
    
  }
    return (
      <>
        <div className='flex justify-end gap-10 m-auto  flex-wrap h-96'>
           <div className='mt-4 mb-2 py-4 bg-slate-200 w-96'>
            <h1 className='text-center text-black font-bold text-4xl mb-4'>Contact Us</h1>
            <div className='mx-8 '>
           <input className='border-2 border-red-500 border-solid mx-3 my-2 px-3 py-1 w-full ' type='text' placeholder='Enter your name'/><br/>
           <input className='border-2 border-red-500 border-solid mx-3 my-2 px-3 py-1 w-full ' type='text' placeholder='Enter your mail'/><br/>
           <input className='border-2 border-red-500 border-solid mx-3 my-2 px-3 py-1 w-full ' type='text' placeholder='Enter your mobile number'/><br/>
           <input className='border-2 border-red-500 border-solid mx-3 my-2 px-3 py-2 w-full' type='textbox' placeholder='Enter message'/><br/>
           </div>
           <div className='flex justify-center '>
            <Button className=' bg-red-500 border-none' onClick={submit}>Submit</Button></div>
            <h2 ref={submitmsg} style={{display:"none", color:"green", textAlign:"center", marginTop:"12px"}}>Submiited Sucessfully</h2>
           </div>
           <div className='w-1/2'>
            <img src={img1} alt='not found' className='w-96 h-96'/>
           </div>
        </div>
        <div className='mt-40'>

        <Footer/>
        </div>
       
        </>
    );
}

export default Contact;