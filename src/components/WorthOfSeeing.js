import React, { useState, useContext } from 'react';
import '../style/WorthOfSeeing.scss';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import dominica from "../images/dominicaPhoto.png";
import jamajka from "../images/jamajkaPhoto.png";
import kuba from "../images/kubaPhoto.png";

import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';
import { WorthOfSeeingContext } from "../contexts/WorthOfSeeingContext";
const WorthOfSeeing = () => {
    const { imageCounter, placeName, gallery, handleNextImage, handlePreviousImage } = useContext(WorthOfSeeingContext)

    const handleTransition = () => {
        const img = document.querySelectorAll(".imageOfPlaceContainer__image");
        const imgTitle = document.querySelector(".imageOfPlaceContainer__placeTitle");

        imgTitle.classList.add('imageOfPlaceContainer__placeTitle--transition');
        for (let i = 0; i < img.length; i++) {
            img[1].classList.add('imageOfPlaceContainer__image--transition');
        }
        setTimeout(() => {
            imgTitle.classList.remove('imageOfPlaceContainer__placeTitle--transition');
            for (let i = 0; i < img.length; i++) {
                img[1].classList.remove('imageOfPlaceContainer__image--transition');
            }
        }, 400);
    }
    return (
        <div id="worthOfSeeing" className="worthOfSeeing">
            <div className="worthOfSeeing__content">
                <div className="placeToChoose">
                    <button onClick={() => { handlePreviousImage(); handleTransition(); }} className="placeToChoose__buttonArrow"><Arrow className="placeToChoose__arrow placeToChoose__arrow--left" /></button>
                    <div className="imagesOfPlacesContainer">
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--left">
                            <img onClick={() => { handlePreviousImage(); handleTransition(); }} src={gallery[imageCounter > 0 ? imageCounter > 1 ? imageCounter > 2 ? 2 : 1 : 0 : gallery.length - 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--middle">
                            <img src={gallery[imageCounter]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                            <h1 className="imageOfPlaceContainer__placeTitle">{placeName[imageCounter]}</h1>
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--right">
                            <img onClick={() => { handleNextImage(); handleTransition() }} src={gallery[imageCounter > 0 ? imageCounter === gallery.length - 1 ? 0 : imageCounter + 1 : 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                        </div>
                    </div>
                    <button onClick={() => { handleNextImage(); handleTransition(); }} className="placeToChoose__buttonArrow"><Arrow className="placeToChoose__arrow placeToChoose__arrow--right" /></button>
                </div>
                <span className="placeToChooseCounter">0{imageCounter + 1}/0{gallery.length}</span>
                <div className="moveDownToNextSection">
                    <MoveDownWhite className="moveDownToNextSection__triangle moveDownToNextSection__triangle--first" />
                    <MoveDownWhite className="moveDownToNextSection__triangle moveDownToNextSection__triangle--second" />
                </div>
            </div>
        </div>
    );
}

export default WorthOfSeeing;