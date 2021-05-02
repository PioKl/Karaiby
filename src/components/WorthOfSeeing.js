import React, { useContext } from 'react';
import '../style/WorthOfSeeing.scss';
import { ReactComponent as Arrow } from '../svg/arrow.svg';

import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';
import { WorthOfSeeingContext } from "../contexts/WorthOfSeeingContext";
const WorthOfSeeing = () => {
    const { imageCounter, placeName, gallery, galleryWebp, handleNextImage, handlePreviousImage } = useContext(WorthOfSeeingContext)

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
                            <picture>
                                <source srcSet={galleryWebp[imageCounter > 0 ? imageCounter > 1 ? imageCounter > 2 ? 2 : 1 : 0 : galleryWebp.length - 1]} type="image/webp" />
                                <source srcSet={gallery[imageCounter > 0 ? imageCounter > 1 ? imageCounter > 2 ? 2 : 1 : 0 : gallery.length - 1]} type="image/png" />
                                <img onClick={() => { handlePreviousImage(); handleTransition(); }} src={galleryWebp[imageCounter > 0 ? imageCounter > 1 ? imageCounter > 2 ? 2 : 1 : 0 : galleryWebp.length - 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                            </picture>
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--middle">
                            <picture>
                                <source srcSet={galleryWebp[imageCounter]} type="image/webp" />
                                <source srcSet={gallery[imageCounter]} type="image/png" />
                                <img src={galleryWebp[imageCounter]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                            </picture>
                            <h1 className="imageOfPlaceContainer__placeTitle">{placeName[imageCounter]}</h1>
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--right">
                            <picture>
                                <source srcSet={galleryWebp[imageCounter > 0 ? imageCounter === galleryWebp.length - 1 ? 0 : imageCounter + 1 : 1]} type="image/webp" />
                                <source srcSet={gallery[imageCounter > 0 ? imageCounter === gallery.length - 1 ? 0 : imageCounter + 1 : 1]} type="image/png" />
                                <img onClick={() => { handleNextImage(); handleTransition() }} src={galleryWebp[imageCounter > 0 ? imageCounter === galleryWebp.length - 1 ? 0 : imageCounter + 1 : 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                            </picture>
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