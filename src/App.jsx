import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import First from "./component/first";
import User from "./component/user";
import Title from "./component/title";
import Video from "./component/video";
import Campus from "./component/campus";
import Testimonial from './component/testimonial'
import Contact from "./component/Contact";

function App() {

  const [play , setplay] = useState(false)

  return (
    <>

      <div className="background ">
        <Navbar></Navbar>
        <First></First> 
      </div>

       


      <div>
        <Title></Title>
        <User></User>
      </div>
      
      <div className="">
        <Video></Video>
        <Title gallery="Gallery" campus="Campus Photo" ></Title>
        <Campus></Campus>
        <Title gallery="TESTIMONIALS" campus="What Student Says" ></Title>
        <Testimonial></Testimonial>
        <Title gallery="Contact Us" campus="Get in Touch" ></Title>
        <Contact></Contact>
      </div>
      

    </>
  );
}

export default App;
