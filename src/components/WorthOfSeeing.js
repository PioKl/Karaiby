import React, { useState } from 'react';
import '../style/WorthOfSeeing.scss';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import dominica from "../images/dominicaPhoto.png";
import jamajka from "../images/jamajkaPhoto.png";
import kuba from "../images/kubaPhoto.png";
import gallery1 from "../images/jamajkaPhoto.png";
import gallery2 from "../images/dominicaPhoto.png";
import gallery3 from "../images/kubaPhoto.png";
import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';
const WorthOfSeeing = () => {
    const gallery = [gallery1, gallery2, gallery3];
    const placeName = ['Jamajka', 'Dominika', 'Kuba'];
    const [imageCounter, setImageCounter] = useState(0)
    const handlePreviousImage = () => {
        if (imageCounter <= 0) {
            setImageCounter(gallery.length - 1);
        }
        else if (imageCounter >= 0) {
            setImageCounter(imageCounter - 1);
        }
    }
    const handleNextImage = () => {
        setImageCounter(imageCounter + 1);
        if (imageCounter === gallery.length - 1) {
            setImageCounter(0);
        }
    }
    return (
        <div className="worthOfSeeing">
            <div className="worthOfSeeing__content">
                <div className="placeToChoose">
                    <button onClick={handlePreviousImage} className="placeToChoose__buttonArrow"><Arrow className="placeToChoose__arrow placeToChoose__arrow--left" /></button>
                    <div className="imagesOfPlacesContainer">
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--left">
                            <img onClick={handleNextImage} src={gallery[imageCounter > 0 ? (gallery.length - imageCounter) : 0]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--middle">
                            {/*                             <img onClick={handlePreviousImage} src={gallery[imageCounter > 0 ? (0 + imageCounter - 1) : 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" /> */}
                            {/*                             <img onClick={handlePreviousImage} src={gallery[imageCounter > 0 ? imageCounter === 2 ? 3 : (0 + imageCounter - 1) : 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" /> */}
                            <img onClick={handlePreviousImage} src={gallery[imageCounter > 0 ? imageCounter > 1 ? (gallery.length - 1 - imageCounter + 2) : 0 : 1]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />

                            {/*                             <img src={gallery[`${imageCounter + (imageCounter >= 2 ? -2 : 1)}`]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" /> */}
                            <h1 className="imageOfPlaceContainer__placeTitle">{placeName[`${imageCounter > 0 ? imageCounter > 1 ? (gallery.length - 1 - imageCounter + 2) : 0 : 1}`]}</h1>
                            {/*                             <h1 className="imageOfPlaceContainer__placeTitle">{placeName[`${imageCounter + (imageCounter >= 2 ? -2 : 1)}`]}</h1> */}
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--right">
                            <img onClick={handlePreviousImage} src={gallery[imageCounter > 0 ? imageCounter > 1 ? imageCounter > 2 ? (gallery.length - 1 - imageCounter + 3) : 0 : 1 : 2]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" />
                            {/*       <img onClick={handlePreviousImage} src={gallery[imageCounter > 0 ? imageCounter === 2 ? 0 : (0 + imageCounter) : 2]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" /> */}
                            {/*                             <img onClick={handleNextImage} src={gallery[`${imageCounter + (imageCounter >= 1 ? -1 : 2)}`]} alt="zdjęcie miejsca" className="imageOfPlaceContainer__image" /> */}
                        </div>
                    </div>
                    <button onClick={handleNextImage} className="placeToChoose__buttonArrow"><Arrow className="placeToChoose__arrow placeToChoose__arrow--right" /></button>
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