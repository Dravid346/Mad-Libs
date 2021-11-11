import React from "react";
import { Link } from 'react-router-dom';

function HomePage(){
    return (
        <>
            <h1>Mad Libs</h1>
            <p>Type in your own words to make silly stories!</p>
            <Link to="/input">Click Here to Play</Link>
        </>
    )
}

export default HomePage;
