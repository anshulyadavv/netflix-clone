import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {

const [apiData, setApiData] = useState([]);
 
const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjBmNzI2MjIxNDMzNmI2M2NmNTQzOGI5ZWJjMTBiYiIsIm5iZiI6MTc0Mzk2MTM1OS4zMDA5OTk5LCJzdWIiOiI2N2YyYmQwZjJmN2Q0MzcwMjc5OWU1OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T_f1COoyZ2QnPEx5zZ1kPHSqJdZEpEpqrVYULN0GCIA'
  }
};



const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
