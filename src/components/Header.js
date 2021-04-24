import React, { useState } from 'react';
import '../style/Header.scss';
import bgVideo from '../images/headerBackground.mp4';
import { ReactComponent as BurgerMenu } from '../svg/burgerMenu.svg';
import { ReactComponent as ClearIcon } from '../svg/clearIcon.svg';
import { ReactComponent as MoveDownGold } from '../svg/trianglePolygonGold.svg';
import { ReactComponent as MoveDownWhite } from '../svg/trianglePolygonWhite.svg';

import { ReactComponent as Facebook } from '../svg/facebook.svg';
import { ReactComponent as Instagram } from '../svg/instagram.svg';
import { ReactComponent as Twitter } from '../svg/twitter.svg';
const Header = () => {
    const handleScroll = (e) => {
        unlockScroll();
        const scrollTo = document.getElementById(e.target.getAttribute('name'));
        scrollTo.scrollIntoView({
            block: `${e.target.getAttribute('name') === 'attractions' ? 'start' : 'center'}`,
        });
        setTimeout(() => {
            setBurgerMenu(false);
        }, 1000);
    }
    const [burgerMenu, setBurgerMenu] = useState(false)
    const handleMenuBurger = () => {
        setBurgerMenu(!burgerMenu);
    }

    //Zablokowanie scrolla, gdy otwiera sie menu, a nastepnie jego odblokowanie, gdy menu jest juz zamykane
    const lockScroll = () => {
        const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
        const body = document.body;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}`;
    };
    const unlockScroll = () => {
        const body = document.body;
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });

    return (
        <header className="header">

            {/* Navigation */}
            <div className="navigation">
                <div className="logo">
                    <span className="logo__companyName">Travel</span>
                </div>
                <ul className="menu">
                    <li onClick={handleScroll} className="menu__item" name="history" alt="Historia">Historia</li>
                    <li onClick={handleScroll} className="menu__item" name="worthOfSeeing" alt="Warto zobaczyć">Warto Zobaczyć</li>
                    <li onClick={handleScroll} className="menu__item" name="attractions" alt="Atrakcje">Atrakcje</li>
                    <li onClick={handleScroll} className="menu__item" name="contact" alt="Kontakt">Kontakt</li>
                </ul>
                <div className="social">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><Instagram fill="white" className="social__icon social__icon--instagram" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook fill="white" className="social__icon social__icon--facebook" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter fill="white" className="social__icon social__icon--twitter" /></a>
                </div>
                {burgerMenu ? <ClearIcon onClick={() => { handleMenuBurger(); unlockScroll() }} className="navigation__clearIcon" /> : <BurgerMenu
                    onClick={() => { handleMenuBurger(); lockScroll() }} className="navigation__burgerMenu" />}
                <div className={`navigationContainer navigationContainer--${burgerMenu ? "visible" : "hidden"}`}>
                    <ul className="navigationContainer__burgerItemList">
                        <li onClick={handleScroll} name="history" className="navigationContainer__burgerItem">Historia</li>
                        <li onClick={handleScroll} name="worthOfSeeing" className="navigationContainer__burgerItem">Warto Zobaczyć</li>
                        <li onClick={handleScroll} name="attractions" className="navigationContainer__burgerItem">Atrakcje</li>
                        <li onClick={handleScroll} name="contact" className="navigationContainer__burgerItem">Kontakt</li>
                    </ul>
                </div>
            </div>

            {/* Hero */}
            <div id="mainSite" className="hero">
                <div className="mainTitle">
                    <h1 className="mainTitle__firstTitle">Odkryj</h1>
                    <h1 className="mainTitle__secondTitle">Karaiby</h1>
                </div>
                <button onClick={handleScroll} name="worthOfSeeing" className="hero__button">Sprawdź Miejsca</button>
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