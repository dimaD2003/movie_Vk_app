import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
import { useState, useEffect} from "react";
import Searching from "../components/Searching";
// import Footer from "../components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

const [filteredMovies , setFilteredMovies] = useState([]);


const getMovies = async()=>{
const {
 data:{
   data:{movies}
 }
} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
 setMovies(movies);
 setFilteredMovies(movies); //init all mv
  setIsLoading(false)        
}




useEffect(() => {
  getMovies();
}, []);


const handleSearch = (query) => {
  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredMovies(filtered);
};


 
 return ( <>
   <section className='container'>
    <  Searching searchItem={handleSearch}/> 
   {isLoading ? 
   <div className='load'>
     <span>Loading....</span>
   </div > 
   : filteredMovies.map(item =>{console.log(item);
        return <div key={item.id+2} className='all_movies'>
         <Movie 
           key={item.id} 
           id={item.id} 
           year={item.year}
           title={item.title} 
           summary={item.summary == ''? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" : item.summary} 
           poster={item.medium_cover_image}  
           genres={(item.genres)}
           large_cover_image={item.large_cover_image}
           date_uploaded={item.date_uploaded}
           rating={item.rating}
           language={item.language}
           torrents={(item.torrents)}></Movie></div> 
     }) } 
     
    </section>
    {/* <Footer/> */}
    </>)
   
}



