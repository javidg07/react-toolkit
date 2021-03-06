import React from 'react'
import './MovieCard.scss';
    import { Link } from 'react-router-dom';
export default function MovieCard({
    data
}) {
    return (
        <div className="card_item">
           <Link to={`/movie/${data.imdbID}`} >
           <div className="card">
               <div className="card_top">
                   <img src={data.Poster} alt="poster" />
               </div>
               <div className="card_bottom">
                   <div className="card_info">
                       <h4>{data.Title}</h4>
                       <p>{data.Year}</p>
                   </div>
               </div>
           </div>
           </Link>
        </div>
    )
}
