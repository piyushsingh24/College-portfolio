import React from "react";
import video from "../assets/college-video-6XtGR-D3.mp4";
import playicon from "../assets/play-icon.png";
import Videoplayer from "./videoplayer";

function Video() {
  function playvideo() {
    setplay(!play);
    console.log(play);
  }

  return (
    <div>
      <div className=" w-[90%] m-auto flex justify-between relative" id="about">
        <div className="w-[45%] m-4 mt-4">
          <video src={video} autoPlay controls></video>
        </div>

        <div className="absolute top-32 left-60 w-20 justify-center flex items-center z-10">
          <img src={playicon} alt="" onClick={playvideo} />
        </div>

        <div className="w-[50%]">
          <h2 className="text-blue-800 text-xl font-semibold">
            ABOUT UNIVERSITY
          </h2>
          <h2 className="text-purple-900 text-5xl my-2 font-semibold">
            Nurturing Tomorrow's Leaders Today
          </h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education. With
            a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities. Whether
            you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
      <Videoplayer></Videoplayer>
    </div>
  );
}

export default Video;
