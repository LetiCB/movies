import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDataByActor } from "../../redux/slices/movies/moviesSlice";
import { store } from '../../redux/store';
import HarryPotterSpecial from "../../components/HarryPotter";
import { fillHarryCard } from "../../utils/helpers";
import "./styles/home.css"
import Search from "../../components/Search";

export default function Home() {

    let movies = useSelector((store)=> store.movies.data)
    // console.log(movies)
    let filteredMovies = useSelector((store) => store.movies.filteredData);
    let dispatch = useDispatch();
    let [searchQuery, setSearchQuery] = useState("");
  
    let handleSearch = (query) => {
        setSearchQuery(query);
        dispatch(filterDataByActor(query));
    };


    return(
        <>
        <Search onSearch={handleSearch} />
        <HarryPotterSpecial/>
        <div className="cards-container">
            {searchQuery === "" ? (
            movies.slice(0, 25).map(fillHarryCard)
            ) : (
            filteredMovies.slice(0, 25).map(fillHarryCard)
            )}
        </div>
        </>
    )
}