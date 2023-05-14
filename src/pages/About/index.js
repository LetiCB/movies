import React from "react";
import About from "../../components/About";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";

export default function AboutPage() {

    let aboutData = useSelector((store)=> store.about.data)
    console.log(aboutData)

    return (
        <>
            <About title={aboutData.title} text={aboutData.text}/>
        </>
    )
}