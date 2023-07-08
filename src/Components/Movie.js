import React, { useState } from 'react'
import classes from './Movie.module.css';

 function Movie(props) {
  let { title, poster_path, release_date, vote_average ,id} = props.movie
  let img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
 
 


  if(!poster_path) {
    return;
  }
  return (
   
      <div className={classes.Movie}>
        <img className={classes['movie-img']} src={img} alt={poster_path} />
        <h4 className={classes['movie-title']}>{title}</h4>
        <div className={classes.info}>
          <p>{release_date}</p>
          <p>{vote_average}</p>
        </div>
      </div>
  )
}

export default Movie