import dark from "../assets/dark-arrow.png"

function First(){


  return(
    <div className="absolute top-0 h-full flex justify-center items-center w-full" id="first">
        <div className="flex flex-col items-center w-[700px] ">
          <h1 className="text-5xl text-center">
            Ensure better Education for Better World
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti porro, fuga placeat libero tempora atque excepturi nemo quis error consequatur. Dolor quas voluptatibus perspiciatis.
          </p>

          
          <button className="bg-white rounded-full px-8 py-2 font-bold  text-black flex justify-center items-cente gap-2">Explore More
            <img src={dark} alt=""  className="w-6 py-2"/>
          </button>
        </div>


    </div>
  )
}
  
export default First