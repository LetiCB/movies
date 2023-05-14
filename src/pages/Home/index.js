import React from "react";
import { useSelector } from "react-redux";
import { store } from '../../redux/store';
import HarryPotterSpecial from "../../components/HarryPotter";
import { fillHarryCard } from "../../utils/helpers";
import "./styles/home.css"

export default function Home() {

    let movies = useSelector((store)=> store.movies.data)
    // console.log(movies)

    return(
        <>
        <HarryPotterSpecial/>
        <div className="cards-container">{movies.slice(0, 25).map(fillHarryCard)}</div>
        </>
    )
}