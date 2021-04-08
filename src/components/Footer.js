import React from 'react';
import '../style/Footer.scss';
import postCards from '../images/postCards.png';
import { ReactComponent as InstagramAlternate } from "../svg/instagramAlternate.svg";
import { ReactComponent as Facebook } from "../svg/facebook.svg";
import { ReactComponent as Twitter } from "../svg/twitter.svg";
import { ReactComponent as Mail } from '../svg/iconMail.svg';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <img className="footer__postCardsImg" src={postCards} alt="" />
                <div className="footerMail">
                    <Mail className="footerMail__icon" />
                    <p onClick={(e) => { navigator.clipboard.writeText(e.target.innerText) }} className="footerMail__emailAdress">travel@gmail.com</p>
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