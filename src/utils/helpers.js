import React from "react";
import Card from "../components/Card";


export function fillHarryCard(data){
    return(
        <Card
            key={data.id}
            image={data.image}
            name={data.name}
            actor={data.actor}
        />
    )
}
