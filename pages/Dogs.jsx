import React, { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";

export const Dogs = () => {
  const [dogs, setDogs] = useState([]);
  const [text , setText] = useState("")
  const [search , setSearch]  = useState(false)
  const [isLoading , setIsLoading] = useState(false)


  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://api.thedogapi.com/v1/breeds?limit=30&api_key=live_kgmdlIAmLqwoovvFLwnou0KI62vpzYC3MyTODQZgi1mTQ97mINVT6xnZsDMUF6EN`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDogs(data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false)
      });
      setSearch(false)
  }, [])


   
  const searchedApi =()=> {
    setIsLoading(true)
     fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}`)
     .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDogs(data);
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        console.log(err.message);
      });
  }
 const handleSubmit = (e) => {
   e.preventDefault()
   searchedApi()
   setSearch(true)
   if(!text){
    alert("empty field")
   }
 }
 
 


  // {{endpoint}}v1/images/search?breed_ids=beng&include_breeds=true
  // https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}
  // https://api.thecatapi.com/v1/breeds

  return (
    <div className="w-full h-full p-2">
    <Search text={text} setText={setText} handleSubmit={handleSubmit} isLoading={isLoading}/>
      <div className="w-full h-full mt-6 p-6 mb-10">
       <h1 className="text-3xl font-bold text-center mb-10">Know More About Your Favourite Dogs</h1>

        <div className="cards-container mt-4 w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">

 
           {!search ? dogs.map((dog) => (
               <Link to={`/${dog.name}`} key={dog.id}>
            <div className="card w-full h-full border border-blue-300 rounded shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 " key={dog.id}>
              <img src={dog.image.url} alt={dog.name}  className="rounded w-full object-cover h-96" />
                <div className="w-full h-full mt-4 p-2">
                <div className="name flex justify-center"><h3 className="text-xl font-semibold p-2 ">Name: {dog.name}</h3></div>
                </div>
              </div>
                </Link>
           )) :
           
           <>
           
          {dogs.map((dog) => (
               <Link to={`/${dog.name}`} key={dog.id}>
            <div className="card w-full h-full border border-blue-300 rounded shadow-lg cursor-pointer hover:border-blue-900 hover:bg-blue-300 hover:text-white transition-all  duration-200 " key={dog.id}>
              <div className="img w-full h-full">
              <img
            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
            alt={dog.name}
          />
                <div className="w-full h-full mt-4 text-center">
                <div className="name flex justify-center"><h3 className="text-xl font-semibold p-2">Name : {dog.name}</h3></div>
                </div>
              </div>
            </div>
                </Link>
          ))} 
          
           </>
           
           }
           
          
          
          
          

   
          
          
          
          
          
          
          
        </div>

      </div>
    </div>
  );
};


export default Dogs;
