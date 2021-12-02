import React from "react";

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

function randomButton(event) {
    event.target.previousElementSibling.value = "Getting random word...";
    sendRequest(event.target.previousElementSibling.className, event.target);
};

function CreateInput({word, names, i, index}){
    names[i] = word.d;
    let inputName = word.d;
    if(i===0){inputName = index;}
    
    for(let j=0; j<i; j++){
        if(names[j] === word.d){return null;}
    }
    
    return(<>
        <label key={word.d}>{word.d}:</label>
        <input type="text" name={inputName} size="30" required="required" className={word.t}/>
        <button className="random" type="button" onClick={randomButton}>Random</button>
        <br/>
    </>)
}

function Input({template, index}){
    let names = [];
    return (
        <>
            <p>Enter words in the boxes, then click Submit to see your story! The random buttons will
                 fill in the box for you. Don't like the random word? Click it again for another!</p>
            <form action="/Output" method="get">
                {template.words.map((word, i) => <CreateInput word={word} names={names} i={i} index={index}/>)}
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Input;
