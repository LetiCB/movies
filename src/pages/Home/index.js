import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterDataByActor, filterDataByCharacter } from "../../redux/slices/movies/moviesSlice";
import { store } from '../../redux/store';
import HarryPotterSpecial from "../../components/HarryPotter";
import { fillHarryCard } from "../../utils/helpers";
import "./styles/home.css"
import Search from "../../components/Search";
import AboutHP from "../../components/AboutHP";
import { Link } from 'react-router-dom';

export default function Home() {
    let movies = useSelector((store) => store.movies.data);
    let [searchQuery, setSearchQuery] = useState("");
    let dispatch = useDispatch();

    let handleSearch = (query) => {
        setSearchQuery(query);
        dispatch(filterDataByActor(query));
        dispatch(filterDataByCharacter(query));
    };

    let filteredMovies = movies.filter(
        (movie) =>
            movie.actor.toLowerCase().includes(searchQuery) ||
            movie.name.toLowerCase().includes(searchQuery)
    );

    let displayCards = searchQuery === "" ? movies.slice(0, 25) : filteredMovies;

    let aboutHPData = useSelector((store) => store.aboutHP.data);

    return(
        <>
        <HarryPotterSpecial/>
        <AboutHP intro={aboutHPData.intro} />
        <div className="read-more">
            <Link to={"/abouthp"}>Learn more about The Harry Potter Series</Link>
        </div>
        <Search onSearch={handleSearch} />
        <div className="cards-container">
            {displayCards.length > 0 ? (
                displayCards.map(fillHarryCard)
            ) : (
                <p>Sorry, no results were found.</p>
            )}
        </div>
        </>
    )
}