import React from 'react';
import '../style/WorthOfSeeingPart2.scss';
import dominicaGallery1 from "../images/dominicaGallery1.png";
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import { ReactComponent as ArrowAlternate } from '../svg/arrowAlternate.svg';
import { ReactComponent as DominicaMap } from '../svg/dominicaMap.svg';
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
                            <div className="pickedPlaceTitleContainer">
                                <h1 className="pickedPlaceTitleContainer__title">Dominika</h1>
                                <div className="pickedPlaceSliderControl">
                                    <button className="pickedPlaceSliderControl__buttonArrow"><ArrowAlternate className="pickedPlaceSliderControl__arrow pickedPlaceSliderControl__arrow--left" /></button>
                                    <span className="pickedPlaceSliderControl__counter">01/04</span>
                                    <button className="pickedPlaceSliderControl__buttonArrow"><ArrowAlternate className="pickedPlaceSliderControl__arrow pickedPlaceSliderControl__arrow--right" /></button>
                                </div>
                            </div>

                            <p className="pickedPlaceInfo__informations">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="pickedPlaceInfo__moreButton">Więcej</button>

                        </div>
                    </div>
                    <div className="pickedPlace__footer">
                        <DominicaMap className="pickedPlace__map" alt="dominica map" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorthOfSeeingPart2;