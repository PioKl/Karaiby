import React from 'react';
import '../style/ScrollBack.scss';
const ScrollBack = () => {
    window.addEventListener("scroll", function () {
        const beginningOfReturnToTop = document.getElementById('history');
        const returnToTop = document.querySelector('.scrollTopButton');
        if(beginningOfReturnToTop.getBoundingClientRect().top <= 0) {
            returnToTop.classList.add("showButton");
        } else {
            returnToTop.classList.remove("showButton");
        }
    });
    const handleReturnToTop = () => {
        window.scrollTo(0, 0);
    }
    return ( 
        <button onClick={handleReturnToTop} className="scrollTopButton" value=""></button>
     );
}
 
export default ScrollBack;