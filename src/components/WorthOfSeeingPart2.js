import React from 'react';
import '../style/WorthOfSeeingPart2.scss';
import dominicaGallery1 from "../images/dominicaGallery1.png";
import { ReactComponent as Arrow } from '../svg/arrow.svg';
const WorthOfSeeingPart2 = () => {
    const gallery1 = { dominicaGallery1 };
    return (
        <>
            <div className="pickedPlace">
                <div className="pickedPlace__content">
                    <div className="pickedPlace__main">
                        <div className="galleryOfPickedPlace">
                            <button className="galleryButton galleryButton--left">
                                <Arrow className="galleryButton__arrow galleryButton__arrow--left" />
                            </button>
                            <img className="galleryOfPickedPlace__img" src={dominicaGallery1} alt="" />
                            <button className="galleryButton galleryButton--right">
                                <Arrow className="galleryButton__arrow galleryButton__arrow--right" />
                            </button>
                            <span className="galleryOfPickedPlace__counter">01/04</span>
                        </div>
                        <div className="pickedPlaceInfo">

                        </div>
                    </div>
                    <div className="pickedPlace__footer">

                    </div>
                </div>
            </div>
        </>
    );
}

export default WorthOfSeeingPart2;