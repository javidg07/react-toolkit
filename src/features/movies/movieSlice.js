import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import {APIKey} from '../../common/apis/movieApiKeys';

 export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
async()=>{
    const movieSearch ='Harry';
    const res = await  movieApi.get(`?apiKey=${APIKey}&s=${movieSearch}&type=movie`)
   return res.data;
  }
);

 export const fetchAsyncShows = createAsyncThunk('series/fetchAsyncShows',
  async()=>{
    const seriesSearch ='Friends';
    const res = await movieApi.get(`?apiKey=${APIKey}&s=${seriesSearch}&type=series`)
    return res.data;
  }
  ); 
  export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movie/series/fetchAsyncMovieOrShowDetail',
  async(id)=>{
    const res = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return res.data;
  }
  ); 
const initialState ={
    movies:{},
    series:{},
    selectedmovieOrShow:{}
}
//reducers
const movieSlice =createSlice({
    name:"movies",
    initialState,
    reducers:{
        //action
        // addMovies:(state,{payload})=>{
        //   state.movies = payload;
        //   //imme is avoided {...state,payload } no needed in toolkit
        // },
        removeSelectedMovieOrShow:(state)=>{
            state.selectedmovieOrShow={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("data succesfully recieved");
            return {...state,movies:payload}
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("data succesfully recieved");
            return {...state,series:payload}
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("data succesfully recieved");
            return {...state,selectedmovieOrShow:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("rejected");
            
        },
    }
});
export const {removeSelectedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer;
export const getAllSeries = (state)=> state.movies.series; 
export const getAllMovies = (state)=> state.movies.movies; 
export const getSelectedMovieOrShow = (state)=> state.movies.selectedmovieOrShow; 