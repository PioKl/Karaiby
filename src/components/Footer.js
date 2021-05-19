import React from 'react';
import '../style/Footer.scss';
import postCards from '../images/postCards.png';
import postCardsWebp from '../images/postCards.webp';
import { ReactComponent as InstagramAlternate } from "../svg/instagramAlternate.svg";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Mail } from '../svg/iconMail.svg';
const Footer = () => {

    const handleCopy = () => {
        const skopiowany = document.querySelector(".footerMail__copiedMessage")
        setTimeout(() => skopiowany.classList.add("messageAppear"), 100);
        setTimeout(() => skopiowany.classList.add("messageDisppear"), 1000);
        setTimeout(() => skopiowany.classList.remove("messageAppear", "messageDisppear"), 1900);
    }

    return (
        <div id="contact" className="footer">
            <div className="footer__container">
                <picture>
                    <source srcSet={postCardsWebp} type="image/webp" />
                    <source srcSet={postCards} type="image/png" />
                    <img className="footer__postCardsImg" src={postCardsWebp} alt="pocztówki" />
                </picture>
                <div className="footerMail">
                    <Mail className="footerMail__icon" />
                    <p onClick={(e) => { navigator.clipboard.writeText(e.target.innerText); handleCopy() }} className="footerMail__emailAdress">travel@gmail.com</p>
                    <span className="footerMail__copiedMessage">Skopiowano</span>
                </div>
                <div className="footerSocial">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><InstagramAlternate className="footerSocial__icon" /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><Facebook fill="black" className="footerSocial__icon" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><Twitter fill="black" className="footerSocial__icon" /></a>
                </div>
            </div>
            <span className="footer__author">Autor Piotr Kłosowski</span>
        </div>
    );
}

export default Footer;