import { async } from 'q';
import './App.css';
import SearchForm from './Components/SearchForm';
import MovieList from './Components/MovieList';
import { useEffect, useState } from 'react';




// console.log(FetchMovies())
function App() {
      let [MovieSearch , SetMovieSearch] = useState('');
      let [Movies , SetMovies] = useState([]);
      let [Loading , SetLoading] = useState(false);

    const FetchMovies = async (BoolSearch, MovieName) => {
        const options = 
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTFhMjViMWVhN2IyZGE4OWE5MDRhNjg1YmRhMWU1OCIsInN1YiI6IjY0YTkzZGI0NjZhMGQzMDEzYTcxZDMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TLxzKLKjVUrk4VUVkM1XL0EsxMM1jnICx5Pa8davx7E',
          },
        }

        try
        {
          SetLoading(true)
          const ApiUrl =
            BoolSearch === true
              ? `https://api.themoviedb.org/3/search/movie?api_key=6a1a25b1ea7b2da89a904a685bda1e58&query=${MovieName}&include_adult=false&language=en-US&page=1`
              : `https://api.themoviedb.org/3/movie/popular?api_key=6a1a25b1ea7b2da89a904a685bda1e58&language=en-US&page=1`
          const response = await fetch(ApiUrl, options)
          const MovieData = await response.json()
          console.log(MovieData.results)
          SetMovies(MovieData.results)
           SetLoading(false);
        }
        catch(err)
        {
            console.log(err);
        }
       
      }


      const GetMovieName = (movie) => {
        SetMovieSearch(movie);
      }
  
      useEffect(()=>{
          MovieSearch ? FetchMovies(true, MovieSearch) : FetchMovies(false)
      }, [MovieSearch])
      



 

  
  return (
    <div className="App">
      <SearchForm onGetMovieName={GetMovieName} />
      {!Loading && <MovieList movies={Movies} />}
      {Loading && <p className="loading">Loading...</p>}
      {!Loading && Movies.length == 0 && (
        <p className="loading">There are no movies with this name</p>
      )}
    </div>
  )
}

export default App;
