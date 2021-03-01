import React from 'react';
import '../style/Header.scss';
import bgVideo from '../images/headerBackground.mp4';
import { ReactComponent as BurgerMenu } from '../svg/burgerMenu.svg';
import { ReactComponent as MoveDown } from '../svg/moveDown.svg';
import { ReactComponent as MoveDownGold } from '../svg/trianglePolygonGold.svg';
import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';
const Header = () => {
    return (
        <header className="header">

            {/* Navigation */}
            <div className="navigation">
                <div className="logo">
                    <span className="logo__companyName">Travel</span>
                </div>
                <BurgerMenu className="navigation__burgerMenu" />
            </div>

            {/* Hero */}
            <div className="hero">
                <div className="mainTitle">
                    <h1 className="mainTitle__firstTitle">Odkryj</h1>
                    <h1 className="mainTitle__secondTitle">Karaiby</h1>
                </div>
                <a href="#"><button className="hero__button">Sprawdź Atrakcje</button></a>
                {/* <MoveDown className="hero__moveDown" /> */}
                <div className="hero__moveDown">
                    <MoveDownGold className="hero__triangle hero__triangle--gold" />
                    <MoveDownWhite className="hero__triangle hero__triangle--white" />
                </div>
            </div>


            {/* Video Background */}
            <div className="gradient"></div>
            <div className="bg-video">
                <video src={bgVideo} className="bg-video__content" autoPlay muted loop></video>
            </div>
        </header>
    );
}

export default Header;