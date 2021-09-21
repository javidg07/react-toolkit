
import MovieListing from '../MovieListing/MovieListing';
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import './Home.scss';
export default function Home() {
    

 const dispatch = useDispatch();
    useEffect(() => {
        const movieSearch ='Harry';
        const seriesSearch ='Friends';
    dispatch(fetchAsyncMovies(movieSearch));
    dispatch(fetchAsyncShows(seriesSearch));
    }, [dispatch])
    return (
       <div className="banner_img">
           <MovieListing/>
       </div>
    )
}
