import React from 'react'
import Movie from './Movie'
import classes from './MovieList.module.css';


function MovieList(props) {
  return (
    <div className={classes.movieList}>
      {props.movies.map((movie, index) => {
        return <Movie movie={movie} key={index} />
      })}
    </div>
  )
}

export default MovieList