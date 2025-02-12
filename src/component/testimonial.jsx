import React, { useState } from "react";
import backicon from "../assets/back-icon.png";
import nexticon from "../assets/next-icon.png";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import user4 from "../assets/user-4.png";

const Testimonial = () => {
  const [slide, setslide] = useState(0);

  function slideleft() {
    if (slide < 0) {
      console.log("left")
      setslide((slide + 450) % (450 * 3));
    }
  }

  function slideright() {
    console.log("right")
    setslide((slide - 450) % (450 * 3));
  }

  return (
    <div className="flex w-[90%] m-auto items-center my-7 justify-between z-20" id="testimonial">
      <div className="">
        <img
          src={backicon}
          alt="back-icon"
          onClick={slideleft}
          className="bg-blue-500 w-12 rounded-full p-2"
        />
      </div>

      <div className="w-[75%]  px-6  overflow-x-hidden">
        <ul
          className="flex duration-300 delay-100"
          style={{ transform: `translateX(${slide}px)` }}
        >
          <li className="student">
            <div className="flex">
                <img src={user1} alt="" className="w-12 mr-4 rounded-full " />
              <div>
                <h1 className="text-2xl text-blue-600 font-semibold">
                  Emily Williams
                </h1>
                <h4>Edusity, USA</h4>
              </div>
            </div>

            <div className="my-12">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </div>
          </li>

          <li className="student">
            <div className="flex">
              <img src={user2} alt="" className="w-12 mr-4 rounded-full" />
              <div>
                <h1 className="text-2xl text-blue-600 font-semibold">
                  William Jackson
                </h1>
                <h4>Edusity, USA</h4>
              </div>
            </div>

            <div className="my-12">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </div>
          </li>

          <li className="student">
            <div className="flex">
              <img src={user3} alt="" className="w-12 mr-4 rounded-full" />
              <div>
                <h1 className="text-2xl text-blue-600 font-semibold">
                  Emily Williams
                </h1>
                <h4>Edusity, USA</h4>
              </div>
            </div>

            <div className="my-12">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </div>
          </li>

          <li className="student">
            <div className="flex">
              <img src={user4} alt="" className="w-12 mr-4 rounded-full" />
              <div>
                <h1 className="text-2xl text-blue-600 font-semibold">
                  William Jackson
                </h1>
                <h4>Edusity, USA</h4>
              </div>
            </div>

            <div className="my-12">
              Choosing to pursue my degree at Edusity was one of the best
              decisions I've ever made. The supportive community,
              state-of-the-art facilities, and commitment to academic excellence
              have truly exceeded my expectations.
            </div>
          </li>
        </ul>
      </div>

      <div className="w-[10%]">
        <img
          src={nexticon}
          alt="next-icon"
          onClick={slideright}
          className="bg-blue-500 w-12  rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default Testimonial;
