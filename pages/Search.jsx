import React, { useEffect, useState } from "react";
import husky from "../assets/husky.jpg";
import kangal from "../assets/kangal.jpg";
import shepherd from "../assets/shepherd.jpg";

const Search = ({text , setText , handleSubmit , isLoading}) => {

    const [dogs, setDogs] = useState([]);
  
 
    
  return (
    <div>
  
{/* 
  // {{endpoint}}v1/images/search?breed_ids=beng&include_breeds=true
  // https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
  // https://api.thecatapi.com/v1/breeds */}

    <div className="w-full h-full p-2">
      <div className="lg:hidden rounded-lg grid grid-cols-2 p-10 gap-2">
        <img src={husky} alt="" className="rounded-lg" />
        <div className="grid">
          <img src={kangal} alt="" className="rounded-lg" />
          <img src={shepherd} alt="" className="rounded-lg" />
        </div>
      </div>

      <div className="mt-4 grid lg:grid-cols-2 p-2">
        <div className="input p-20">
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full h-10  text-xl bg-white p-8 border border-blue-700 outline-none rounded-lg shadow-lg mb-8"
              placeholder="Enter a breed"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          
              <button
                onClick={handleSubmit}
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative w-44 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-lg  group-hover:bg-opacity-0">
                  {isLoading ? "loading..." : "search"}
                </span>
              </button>
              </form>
        </div>

        <div className="hidden rounded-lg lg:grid lg:grid-cols-2 p-10 gap-2">
          <img src={husky} alt="" className="rounded-lg" />
          <div className="grid">
            <img src={kangal} alt="" className="rounded-lg" style={{width:"100%" , height:"auto" , objectFit:"fill"}} />
            <img src={shepherd} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>

    

      <div className="w-full h-full mt-6 p-6 mb-10">
      

        <div className="cards-container mt-4 w-full grid grid-cols-2 lg:grid-cols-3  lg:gap-4">
          {dogs.map((dog) => (
            <div className="card w-full h-full shadow-lg border border-blue-900 rounded" key={dog?.id}>
              <div className="img">
                <img src={dog?.url} alt="" />
              </div>
              <div className="name">
                <h3></h3>
              </div>
              <div className="description"></div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Search