import React from 'react';
import '../style/Loader.scss';
import { ReactComponent as LoadShipWheel } from '../svg/shipWheel.svg';
const Loader = () => {
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader")
        loader.classList.add("disppear");
    });
    return (
        <div className="loader">
            <LoadShipWheel className="loader__shipWheel" />
            <h1 className="loader__title">Ładowanie strony</h1>
        </div>
    );
}

export default Loader;