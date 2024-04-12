import React from 'react'
import  Dog from "../assets/blackDog.jpeg"
import SearchBtn from '../component/SearchBtn'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <main className='w-full h-full'>
    <div className="grid grid-cols-1 lg:grid-cols-2">

   <div className="dogsIntroText mt-20 p-8">
    <h1 className='text-5xl font-extrabold mb-4 flex justify-center'>
    Woofipedia: Explore Dog Breeds API
    </h1>
    <h4 className='text-xl mb-4 flex justify-end'>
    Welcome to Woofipedia, your go-to source for discovering everything about your favorite canine companions! Our Dog Breeds API is designed to provide you with comprehensive information on a wide variety of dog breeds.
     Whether you're a seasoned dog enthusiast or simply looking to learn more about different breeds, Woofipedia has you covered.
    </h4>

    <h4 className='text-xl  mb-4 flex justify-end'>
    With our API, you can search for specific breeds and uncover details ranging from temperament and grooming needs to exercise requirements and historical backgrounds. Whether you're curious about the energetic Australian Shepherd, 
    the regal Siberian Husky, or the playful Dachshund, Woofipedia offers a wealth of information at your fingertips.
    </h4>
   
    <h4 className='text-xl  mb-8 flex justify-end'>
    Join us on this tail-wagging adventure through the world of dogs. 
    Let Woofipedia be your guide as you embark on a journey to learn, explore, and appreciate the diverse and wonderful world of dog breeds!
    </h4>
   
   <div className="button flex justify-center">
    <Link to='dogs'><SearchBtn/></Link>
   </div>
   </div>


   <div className="dogsPicture ">
    <img src={Dog} alt=""  />
   </div>
    </div>
    </main>
  )
}

export default Home