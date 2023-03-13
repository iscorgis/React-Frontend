import React from 'react'
import { connect } from 'react-redux';
import './ItemList.css';
import { deleteItemAction, toggleCompleteItemAction } from '../services/redux/actions';
import { useParams } from "react-router-dom";



const ItemList = props =>{
  const params = useParams();
  const todos = params.todos;


  return <div className="toods">
      {/* <span> Tipo de peliculas: {movies.title} </span> */}
      {/* Tipo de peliculas: {params.movieType} */}
      {/* <React.Fragment> */}
      {/* {movies?.map(movie=>movie.title)} */}
      {/* {movies?.map(movie=><Movie  key={movie.id} movie="{Movie}"/>)} */}
      {/* </React.Fragment> */}
      {/* {movies?.map(movie=>movie.vote_average)} */}
      {/* {movies?.map(movie=>movie.poster_path)} */}

      {/* {movies.map(movie=> <Movie  key={movie.id} movie="{Movie}"/>)} */}
      {/* {movies} */}
      {/* {movies.map(movie => <div key={movie.id}>  {movie.id} </div>)} funciona */}
      {todos.map(todo => <div key={todo.id}>  asdfasdf a</div> )}
      {/* {movies.map(movie => <Movie movie={movie} /> )}    */}
  </div>

}

export default ItemList