import React from 'react'
import msgicon from '../assets/location-icon.png'
import mailicon from '../assets/mail-icon.png'
import phoneicon from '../assets/phone-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => { 
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcd60d8a-099b-4b76-ab03-0fa2d0988ea9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    setInterval(() => {
      setResult(" ")
    }, 4000);
  };

  return (
    <div className='w-[90%] m-auto border-2 flex justify-evenly' id='Contact'>
        <div className='w-[40%]'>
          <h1 className='text-3xl font-semibold text-blue-800 my-2'>Send us a message</h1>
          <p className='font-serif'>
          Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>
          <div className='flex items-center my-2'>
            <img src={phoneicon} className='w-6 mx-3' alt="" />
            <span>+91 8851151976</span>
          </div>
          <div className='flex items-center my-2 '>
            <img src={mailicon} className='w-6 mx-3' alt="" />
            <span>CyberStudent200@gmail.com</span>
          </div>
          <div className='flex items-center my-2 '>
            <img src={msgicon} className='w-6 mx-3' alt="" />
            <span>Sonia Vihar New Delhi - 110094</span>
          </div>
        </div>

        <div className='w-[40%]'>
            <form className='flex flex-col ml-5' onSubmit={onSubmit}>

              <label htmlFor="name" className='mx-2'>Name</label>
              <input type="text" id='name' name='name' placeholder='Name' required className='bg-slate-200 outline-none rounded-3xl py-2 px-4' />
              
              <label htmlFor="email" className='mx-2'>Mail</label>
              <input type="email" id='mail' name='email' placeholder='E-mail' required  className='bg-slate-200 outline-none rounded-3xl py-2 px-4'/>
              
              <label htmlFor="comment" className='mx-2'>Comment</label>
              <textarea name="comment" placeholder='Comment' className='bg-slate-200 outline-none rounded-3xl h-44 py-2 px-4 resize-none'></textarea>

              <button type="submit" className='bg-blue-500 w-20 rounded-full py-2 font-bold text-white my-4 '>Submit</button>
            </form>
        <h2>{result}</h2>
        </div>
    </div>
  )
}

export default Contact
