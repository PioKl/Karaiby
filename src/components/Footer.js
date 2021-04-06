import React from 'react';
import '../style/Footer.scss';
import postCards from '../images/postCards.png';
/* import { ReactComponent as Facebook } from '../svg/facebookBlack.svg';
import { ReactComponent as Instagram } from '../svg/instagramBlack.svg';
import { ReactComponent as TwitterBlack } from '../svg/twitterBlackk.svg'; */
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
                    <p className="footerMail__emailAdress">travel@gmail.com</p>
                </div>
                <div className="footerSocial">
                    <InstagramAlternate className="footerSocial__icon" />
                    <Facebook fill="black" className="footerSocial__icon" />
                    <Twitter fill="black" className="footerSocial__icon" />
                </div>
            </div>
            <span className="footer__author">Autor Piotr Kłosowski</span>
        </div>
    );
}

export default Footer;