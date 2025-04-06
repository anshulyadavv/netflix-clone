import React, { useEffect, useState } from 'react'
import './player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {

  const{id} = useParams();

  const [apiData, setApiData] = useState({
    name:"",
    key: "",
    published_at:"",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjBmNzI2MjIxNDMzNmI2M2NmNTQzOGI5ZWJjMTBiYiIsIm5iZiI6MTc0Mzk2MTM1OS4zMDA5OTk5LCJzdWIiOiI2N2YyYmQwZjJmN2Q0MzcwMjc5OWU1OTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.T_f1COoyZ2QnPEx5zZ1kPHSqJdZEpEpqrVYULN0GCIA'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])
  return (
    <div className='Player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
