import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import userImg from '../../assets/images/user.png';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

import "./Header.scss";
export default function Header() {
  const [term, setTerm] = useState("");
 
  const dispatch = useDispatch();
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(term){
      dispatch(fetchAsyncMovies(term))
      dispatch(fetchAsyncShows(term))
    }
    else{

    }
 

  }
    return (
      <div className="header">
          
            <div className="logo"><Link to="/">Movie App</Link></div> 
            <div className="searchBar">
              <form onSubmit={handleSubmit}>

              <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} />
              <button type="submit"><i className="fa fa-search"></i></button>
              </form>
             
              </div>

          <div className="user-image">
              <img src={userImg} alt="user" />
         </div>
      </div>
    )
}
