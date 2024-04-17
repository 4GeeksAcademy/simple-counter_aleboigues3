//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

import './index.js';

function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i class="far fa-clock"></i>
            </div>

            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval(function () {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = counter % 10;
    console.log(four, three, two, one);
    // Convertir el contador a una cadena y obtener cada dígito
    let counterStr = counter.toString();
    let digitOne = counterStr.length >= 1 ? parseInt(counterStr.charAt(0)) : 0;
    let digitTwo = counterStr.length >= 2 ? parseInt(counterStr.charAt(1)) : 0;
    let digitThree = counterStr.length >= 3 ? parseInt(counterStr.charAt(2)) : 0;
    let digitFour = counterStr.length >= 4 ? parseInt(counterStr.charAt(3)) : 0;

    ReactDOM.render(
        <SimpleCounter
            digitOne={digitOne}
            digitTwo={digitTwo}
            digitThree={digitThree}
            digitFour={digitFour}
        />,
        document.querySelector("#app")
    );
    counter++;
}, 1000);
