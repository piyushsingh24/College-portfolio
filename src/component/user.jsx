import image1 from "../assets/program-1.png";
import image2 from "../assets/program-2.png";
import image3 from "../assets/program-3.png";
import program1 from "../assets/program-icon-1.png";
import program2 from "../assets/program-icon-2.png";
import program3 from "../assets/program-icon-3.png";

function User() {
  return (
    <>
      <div className="relative  mx-32" id="programs">
        <div className="flex w-full  m-auto justify-center items-center h-96 image">
          <div className="relative ">
            <img src={image1} alt="" className=" h-76 w-72 m-12 rounded-lg " />

             <div className=" absolute top-12 ml-12 flex flex-col imagecontainer w-72 h-72 justify-center items-center opacity-0 hover:opacity-100 hover:animate-pulse">
              <img src={program1} alt="" className="w-28 h-32   " />
              <h2 className="text-center text-red z-10 ">Graduation</h2>
            </div>
          </div>

          <div className="relative ">
            <img src={image2} alt="" className=" h-76 w-72 m-12 rounded-lg " />
            <div className=" absolute top-12 ml-12 flex flex-col imagecontainer w-72 h-72 justify-center items-center opacity-0 hover:opacity-100 hover:animate-pulse">
            <img src={program2} alt="" className="w-28 h-32  " />
              <h1 >Graduation</h1>
            </div>
          </div>

          <div className="relative ">
            <img src={image3} alt="" className=" h-76 w-72 m-12 rounded-lg " />
            <div className=" absolute top-12 ml-12 flex flex-col imagecontainer w-72 h-72 justify-center items-center opacity-0 hover:opacity-100 hover:animate-pulse">
            <img src={program3} alt="" className="w-28 h-32  " />
              <h2 className="text-center text-red z-10 ">Graduation</h2>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default User;
