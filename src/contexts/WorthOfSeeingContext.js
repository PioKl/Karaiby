import React, { createContext, useState } from 'react';
import gallery1 from "../images/dominicaPhoto.png";
import gallery2 from "../images/kubaPhoto.png";
import gallery3 from '../images/pirateStuff.png';
import gallery4 from "../images/jamajkaPhoto.png";
import galleryWebp1 from "../images/dominicaPhoto.webp";
import galleryWebp2 from "../images/kubaPhoto.webp";
import galleryWebp3 from '../images/pirateStuff.webp';
import galleryWebp4 from "../images/jamajkaPhoto.webp";
import dominicaGallery1 from "../images/dominicaGallery1.png"; // do testów
import dominicaGalleryWebp1 from "../images/dominicaGallery1.webp";

export const WorthOfSeeingContext = createContext();


const WorthOfSeeingContextProvider = (props) => {

    const [imageCounter, setImageCounter] = useState(0)
    const [imageCounterOfPickedPlace, setImageCounterOfPickedPlace] = useState(0);

    /*     const gallery = [gallery1, gallery2, gallery3, gallery4];
        const placeName = ['Dominika', 'Kuba', 'Pirate', 'Jamajka']; */
    const gallery = [gallery1, gallery2, gallery4];
    const galleryWebp = [galleryWebp1, galleryWebp2, galleryWebp4];
    const placeName = ['Dominika', 'Kuba', 'Jamajka'];
    const galleryOfPickedPlace = [[dominicaGallery1, gallery2, gallery3, gallery4], [gallery2, gallery3, gallery1, gallery4], [gallery4, gallery2, gallery3]]; //zdjecia testowe
    const galleryOfPickedPlaceWebp = [[dominicaGalleryWebp1, galleryWebp2, galleryWebp3, galleryWebp4], [galleryWebp2, galleryWebp3, galleryWebp1, galleryWebp4], [galleryWebp4, galleryWebp2, galleryWebp3]];

    //const galleryOfPickedPlace = [[dominika1, dominika2, dominika3, dominika4], [kuba1,kuba2]]
    //src={galleryOfPickedPlace[imageCounter][imageCounterOfPickedPlace]}

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
        <WorthOfSeeingContext.Provider value={{ imageCounter, gallery, galleryWebp, placeName, handlePreviousImage, handleNextImage, galleryOfPickedPlace, galleryOfPickedPlaceWebp, imageCounterOfPickedPlace, handlePreviousImageOfPickedPlace, handleNextImageOfPickedPlace }}>
            {props.children}
        </WorthOfSeeingContext.Provider>
    )
}

export default WorthOfSeeingContextProvider;