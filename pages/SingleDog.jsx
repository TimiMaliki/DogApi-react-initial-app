import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SearchBtn from "../component/SearchBtn";

const SingleDog = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDog(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [name]);

  //   https://api.thedogapi.com/v1/images/search?breed_ids={breed.id}

  //   card w-[300px] lg:w-full h-full border border-blue-300 rounded-lg shadow-lg mt-4
  return (
    <div className="w-full h-full p-24 lg:p-44">
      {dog.map((dog) => (
        <div className="grid lg:grid-cols-2" key={dog.id}>
          <div className="img rounded-x">
            <img
              src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
              alt={dog.name}
              className="w-full h-full object-cover  rounded-xl border border-blue-400"
              style={{ borderRadius: "11px" }}
            />
          </div>

          <div className="mt-24">
            <div className="name flex justify-center  lg:justify-end mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold p-2">
                name: {dog.name}
              </h3>
            </div>
            <div className="bred-for flex  justify-center lg:justify-end  mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold p-2">
                Bred for: {dog.bred_for}
              </h3>
            </div>
            <div className="life-span flex justify-center lg:justify-end  mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold p-2">
                life Span: {dog.life_span}
              </h3>
            </div>
            <div className="origin flex justify-center lg:justify-end  mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold  p-2 ">
                origin : {dog.origin ? dog.origin : "not found"}
              </h3>
            </div>
            <div className="temprament flex justify-center gap-2 lg:justify-end  mb-10">
              <h3 className="text-xl lg:text-2xl line-break font-semibold">
                temperament  : 
              </h3>
              <p className="text-sm lg:text-lg font-semibold">{dog.temperament}</p>
            </div>
            <div className="weight flex justify-center lg:justify-end  mb-10">
              <h3 className="text-xl lg:text-2xl font-semibold p-2">
                weight: imperial : {dog.weight.imperial} || metric :
                {dog.weight.metric}
              </h3>
            </div>
            <Link to="/">
            <div className="button flex justify-center lg:justify-end">
              <button
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative w-44 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-lg  group-hover:bg-opacity-0">
                  Back
                </span>
              </button>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleDog;

{
  /* {dog.map((dog) => (
           
         )
  */
}
