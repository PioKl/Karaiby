import React from 'react';
import '../style/WorthOfSeeing.scss';
import { ReactComponent as Arrow } from '../svg/arrow.svg';
import dominica from "../images/dominicaPhoto.png";
import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';
const WorthOfSeeing = () => {
    return (
        <div className="worthOfSeeing">
            <div className="worthOfSeeing__content">
                <div className="placeToChoose">
                    <Arrow className="placeToChoose__arrow placeToChoose__arrow--left" />
                    <div className="imagesOfPlacesContainer">
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--left">
                            <img src={dominica} alt="dominika" className="imageOfPlaceContainer__image" />
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--middle">
                            <img src={dominica} alt="dominika" className="imageOfPlaceContainer__image" />
                            <h1 className="imageOfPlaceContainer__placeTitle">Dominika</h1>
                            {/* <span className="imageOfPlaceContainer__counter">01/04</span> */}
                        </div>
                        <div className="imageOfPlaceContainer imageOfPlaceContainer--right">
                            <img src={dominica} alt="dominika" className="imageOfPlaceContainer__image" />
                        </div>
                    </div>
                    <Arrow className="placeToChoose__arrow placeToChoose__arrow--right" />
                </div>
                <span className="placeToChooseCounter">01/04</span>
                <div className="moveDownToNextSection">
                    <MoveDownWhite className="moveDownToNextSection__triangle moveDownToNextSection__triangle--first" />
                    <MoveDownWhite className="moveDownToNextSection__triangle moveDownToNextSection__triangle--second" />
                </div>
            </div>
        </div>
    );
}

export default WorthOfSeeing;