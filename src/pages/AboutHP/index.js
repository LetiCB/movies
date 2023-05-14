import React from "react";
import AboutHP from "../../components/AboutHP";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";


export default function AboutHPPage() {

    let aboutHPData = useSelector((store)=> store.aboutHP.data)
    console.log(aboutHPData)

    return (
        <>
            <AboutHP title={aboutHPData.title} text={aboutHPData.text} text1={aboutHPData.text1} text2={aboutHPData.text2} />
        </>
    )
}