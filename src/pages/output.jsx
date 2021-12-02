import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Input from './input';

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

function getFirstWord(search){
    let wordStart = false;
    let firstWord = '';
    for(let i of search){
        if(i !== '?'){
            if(i === '&'){break;}

            if(i === '='){wordStart = true;}
            if(wordStart){firstWord += i;}
        }
    }

    return firstWord;
}

function setQuery(search, template){
    search += '&';
    search += template.words[0].d;
    search += getFirstWord(search);

    let query = [];
    for(let i of template.words){
        query.push(new URLSearchParams(search).get(i.d));
    }

    return query;
}

function Output({templates}){
    let search = useLocation().search;
    let template = templates[search[1]];

    let query = setQuery(search, template);
    
    return (
        <>
            <p id='story'>
                {template.story.map((story, i) => storyPiece(story, query, i))}
            </p>

            <br />
            <br />
            <Link to="/">Click here to play again with a new template!</Link>

            <p>
                Or enter new words for this template below:
            </p>
            <Input template={template} index={search[1]}/>
        </>
    )
}

export default Output;
