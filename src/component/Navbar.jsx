import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";


function Navbar({play , setplay}) {
  const [backgroundcolor, setbackgroundcolor] = useState("bg-transparent");
  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setbackgroundcolor("bg-blue-600");
      } else {
        setbackgroundcolor("bg-transparent");
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`flex justify-around py-3   items-center ${backgroundcolor} text-white font-sans font-bold fixed w-full z-10`}
      >
        <div className="ml-2">
          <a href="/">
            <img src={logo} alt="" className="w-32" />
          </a>
        </div>

        <div>
          <ul className="flex gap-5 mr-12 items-center">
            <li>
              <Link to="first" smooth={true} offset={0} duration={500} className="hover:text-black hover:cursor-pointer">
                Home
              </Link>
            </li>
            
            <li>
              <Link
                to="programs"
                smooth={true}
                offset={-150}
                duration={500}
                className="hover:text-black hover:cursor-pointer"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                offset={-150}
                duration={500}
                className="hover:text-black hover:cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="gallery"
                smooth={true}
                offset={-150}
                duration={500}
                className="hover:text-black hover:cursor-pointer"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="testimonial"
                smooth={true}
                offset={-250}
                duration={500}
                className="hover:text-black hover:cursor-pointer"
              >
                testimonial
              </Link>
            </li>
            <button className="bg-white text-black py-2 px-6 mr-1 rounded-full hover:bg-black hover:text-white">
              <Link to="Contact" smooth={true} offset={-150} duration={500}>
                Contact-Us
              </Link>
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
