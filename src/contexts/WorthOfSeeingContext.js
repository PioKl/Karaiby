import React, { createContext, useState } from 'react';
import gallery1 from "../images/dominicaPhoto.png";
import gallery2 from "../images/kubaPhoto.png";
import gallery3 from '../images/pirateStuff.png';
import gallery4 from "../images/jamajkaPhoto.png";

export const WorthOfSeeingContext = createContext();


const WorthOfSeeingContextProvider = (props) => {

    const [imageCounter, setImageCounter] = useState(0)

    /*     const gallery = [gallery1, gallery2, gallery3, gallery4];
        const placeName = ['Dominika', 'Kuba', 'Pirate', 'Jamajka']; */
    const gallery = [gallery1, gallery2, gallery4];
    const placeName = ['Dominika', 'Kuba', 'Jamajka'];

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
        <WorthOfSeeingContext.Provider value={{ imageCounter, gallery, placeName, handlePreviousImage, handleNextImage }}>
            {props.children}
        </WorthOfSeeingContext.Provider>
    )
}

export default WorthOfSeeingContextProvider;