import React from "react";
import { Link, useLocation } from 'react-router-dom';

function printSomehting(){
    return(
        <>
            <span>Hello!</span>
        </>
    )
}

function storyPiece(story, inputWords, index){
    if(index < inputWords.length){
        return(
            <>
                <span>{story} {inputWords[index]}</span>
            </>
        )
    }
    return(
        <span>{story}</span>
    )
}

function Output({template}){
    const search = useLocation().search;
    let query = [];
    for(let i of template.words){
        query.push(new URLSearchParams(search).get(i.d));
    }
    return (
        <p>
            {template.story.map((story, i) => storyPiece(story, query, i))}
            <br />
            <br />
            <Link to="/">Click here to play again!</Link>
        </p>
    )
}

export default Output;
