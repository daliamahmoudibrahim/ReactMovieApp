import React, { useState } from 'react'
import classes from './SearchForm.module.css';

function SearchForm(props) {
    let [SearchValue ,SetSearchValue] = useState('');

    let SearchChange=(e)=>{
        SetSearchValue(e.target.value);
    }
    const SearchClickHandler =(e)=>{
        e.preventDefault();
        props.onGetMovieName(SearchValue);
        SetSearchValue("");
    }
  return (
    <div>
        <form onSubmit={SearchClickHandler} >
            <input type='text' value={SearchValue} onChange={SearchChange} className={classes.Input}/>
            <button type='submit' className={classes["search-btn"]}>Search</button>
        </form>
    </div>
  )
}

export default SearchForm