import React from 'react';
import { useSelector } from 'react-redux';

import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);
 let renderMovies,renderSeries ="";

 renderMovies = movies.Response ==='True' ?(
     movies.Search.map((movie,index)=>(
         <MovieCard key={index} data={movie} />
     ))
 ):(
 <div className="movies_error" >
     <h3>{movies.Error}</h3>
 </div>
 )
 renderSeries = series.Response ==='True' ?(
    series.Search.map((show,index)=>(
        <MovieCard key={index} data={show} />
    ))
):(
<div className="movies_error" >
    <h3>{series.Error}</h3>
</div>
)
    return (
        <div className="movie_wrapper">
            <div className="movie_list">
                <h2>Movies</h2>
                <div className="movie_container">
                {renderMovies}
                </div>
            </div>
            <div className="movie_list">
                <h2>Series</h2>
                <div className="movie_container">
                {renderSeries}
                </div>
            </div>
        </div>
    )
}
