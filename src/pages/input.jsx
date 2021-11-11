import React from "react";
import { Link } from 'react-router-dom';
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function sendRequest(word, target){
    const request = new XMLHttpRequest();
    const url = 'http://localhost:8081';
    request.open("GET", url);
    request.setRequestHeader("word", word);
    request.send();
    
    request.onload = (e) => {
        target.previousElementSibling.value = request.responseText;
    }

    return request;
}

function randomWord(grammer){
    let words;
    switch(grammer){
        case "noun":
            words = ["snake", "fool", 'car', 'mountain'];
            break;
        case "verb":
            words = ['jump', 'eat', 'build', 'skydive'];
            break;
        case "adjective":
        case "adj":
            words = ['stinky', 'giant', 'soft', 'tasty'];
            break;
        case "plural":
            words = ['snakes', 'fools', 'cars', 'mountains'];
            break;
        default:
            words = ['ERROR: Unknown class: ' + grammer];
    }

    return words[Math.floor(Math.random()*words.length)];
}

function randomButton(event) {
    event.target.previousElementSibling.value = randomWord(event.target.previousElementSibling.className);
    event.target.previousElementSibling.value = "Getting random word...";
    sendRequest(event.target.previousElementSibling.className, event.target);
};

function createInput(word){
    return(
        <>
            <label>{word.d}:</label>
            <input type="text" name={word.d} size="30" maxlength="100" required="required" class={word.t}></input>
            <button class="random" type="button" onClick={randomButton}>Random</button>
            <br></br>
        </>
    )
}

function Input({template}){
    return (
        <>
            <p>Enter words in the boxes, then click Submit to see your story! The random buttons will fill in the
             box for you. Don't like the random word? Click it again for another!</p>
            <form action="/Output" method="get">
                {template.words.map((word, i) => createInput(word))}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Input;
