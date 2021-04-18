import React, { createContext, useState } from 'react';
import gallery1 from "../images/dominicaPhoto.png";
import gallery2 from "../images/cubaPhoto.png";
import gallery4 from "../images/jamaicaPhoto2.png";
import galleryWebp1 from "../images/dominicaPhoto.webp";
import galleryWebp2 from "../images/cubaPhoto.webp";
import galleryWebp4 from "../images/jamaicaPhoto2.webp";
import dominicaGallery1 from "../images/dominicaGallery1.png";
import dominicaGalleryWebp1 from "../images/dominicaGallery1.webp";
import dominicaGallery2 from "../images/dominicaGallery2.png";
import dominicaGalleryWebp2 from "../images/dominicaGallery2.webp";
import dominicaGallery3 from "../images/dominicaGallery3.png";
import dominicaGalleryWebp3 from "../images/dominicaGallery3.webp";
import dominicaGallery4 from "../images/dominicaGallery4.png";
import dominicaGalleryWebp4 from "../images/dominicaGallery4.webp";
import cubaGallery1 from "../images/cubaGallery1.png";
import cubaGalleryWebp1 from "../images/cubaGallery1.webp";
import cubaGallery2 from "../images/cubaGallery2.png";
import cubaGalleryWebp2 from "../images/cubaGallery2.webp";
import cubaGallery3 from "../images/cubaGallery3.png";
import cubaGalleryWebp3 from "../images/cubaGallery3.webp";
import cubaGallery4 from "../images/cubaGallery4.png";
import cubaGalleryWebp4 from "../images/cubaGallery4.webp";
import jamaicaGallery1 from "../images/jamaicaGallery1.png";
import jamaicaGalleryWebp1 from "../images/jamaicaGallery1.webp";
import jamaicaGallery2 from "../images/jamaicaGallery2.png";
import jamaicaGalleryWebp2 from "../images/jamaicaGallery2.webp";
import jamaicaGallery3 from "../images/jamaicaGallery3.png";
import jamaicaGalleryWebp3 from "../images/jamaicaGallery3.webp";
import { ReactComponent as DominicaMap } from '../svg/dominicaMap.svg';
import { ReactComponent as JamaicaMap } from '../svg/jamaicaMap.svg';
import { ReactComponent as CubaMap } from '../svg/cubaMap.svg';


export const WorthOfSeeingContext = createContext();


const WorthOfSeeingContextProvider = (props) => {

    const [imageCounter, setImageCounter] = useState(0)
    const [imageCounterOfPickedPlace, setImageCounterOfPickedPlace] = useState(0);

    const gallery = [gallery1, gallery2, gallery4];
    const galleryWebp = [galleryWebp1, galleryWebp2, galleryWebp4];
    const placeName = ['Dominika', 'Kuba', 'Jamajka'];
    const galleryOfPickedPlace = [[dominicaGallery1, dominicaGallery2, dominicaGallery3, dominicaGallery4], [cubaGallery1, cubaGallery2, cubaGallery3, cubaGallery4], [jamaicaGallery1, jamaicaGallery2, jamaicaGallery3]];
    const galleryOfPickedPlaceWebp = [[dominicaGalleryWebp1, dominicaGalleryWebp2, dominicaGalleryWebp3, dominicaGalleryWebp4], [cubaGalleryWebp1, cubaGalleryWebp2, cubaGalleryWebp3, cubaGalleryWebp4], [jamaicaGalleryWebp1, jamaicaGalleryWebp2, jamaicaGalleryWebp3]];
    const regionMap = [<DominicaMap className="pickedPlace__map" alt="dominica map"/>, <CubaMap className="pickedPlace__map" alt="cuba map"/>, <JamaicaMap className="pickedPlace__map" alt="jamaica map"/>];

    const handlePreviousImage = () => {
        setImageCounterOfPickedPlace(0);
        if (imageCounter <= 0) {
            setImageCounter(gallery.length - 1);
        }
        else if (imageCounter >= 0) {
            setImageCounter(imageCounter - 1);
        }
    }
    const handleNextImage = () => {
        setImageCounterOfPickedPlace(0);
        setImageCounter(imageCounter + 1);
        if (imageCounter === gallery.length - 1) {
            setImageCounter(0);
        }
    }

    const handlePreviousImageOfPickedPlace = () => {
        if (imageCounterOfPickedPlace <= 0) {
            setImageCounterOfPickedPlace(galleryOfPickedPlace[imageCounter].length - 1);
        }
        else if (imageCounterOfPickedPlace >= 0) {
            setImageCounterOfPickedPlace(imageCounterOfPickedPlace - 1);
        }
    }

    const handleNextImageOfPickedPlace = () => {
        setImageCounterOfPickedPlace(imageCounterOfPickedPlace + 1);
        if (imageCounterOfPickedPlace === galleryOfPickedPlace[imageCounter].length - 1) {
            setImageCounterOfPickedPlace(0);
        }
    }

    return (
        <WorthOfSeeingContext.Provider value={{ imageCounter, gallery, galleryWebp, placeName, regionMap, handlePreviousImage, handleNextImage, galleryOfPickedPlace, galleryOfPickedPlaceWebp, imageCounterOfPickedPlace, handlePreviousImageOfPickedPlace, handleNextImageOfPickedPlace }}>
            {props.children}
        </WorthOfSeeingContext.Provider>
    )
}

export default WorthOfSeeingContextProvider;