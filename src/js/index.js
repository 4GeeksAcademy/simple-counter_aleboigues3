// Import React and other necessary modules
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// Include your styles into the webpack bundle
import "../styles/index.css";
import './index.js';function SimpleCounter(props) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
}SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};let counter = 0;setInterval(function () {
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = counter % 10;    console.log(four, three, two, one);    ReactDOM.render(
        <SimpleCounter
            digitOne={one}
            digitTwo={two}
            digitThree={three}
            digitFour={four}
        />,
        document.querySelector("#app")
    );    counter++;
}, 1000);