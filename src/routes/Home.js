import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component{
  
  state = {
 isLoading: true,
 movies:[],
};


getMovies = async()=>{
const {
 data:{
   data:{movies}
 }
} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
 this.setState({movies:movies, isLoading: false})          
}




componentDidMount(){
 this.getMovies()
}
render(){
 const {isLoading, movies}= this.state;
 
 return (
   <section className='container'>
     
   {isLoading ? 
   <div className='load'>
     <span>Loading....</span>
   </div > 
   : movies.map(item =>{console.log(item);
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
           language={item.language}></Movie></div> 
     }) }
    </section>)
}
}

export default Home;
