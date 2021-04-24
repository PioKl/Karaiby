import React from 'react';
import '../style/History.scss';
import map from '../images/caribbeanMap.png';
import mapWebp from '../images/caribbeanMap.webp';
import pirateStuff from '../images/pirateStuff.png';
import pirateStuffWebp from '../images/pirateStuff.webp';
import ScrollBack from "./ScrollBack";

const History = () => {
    return (
        <div id="history" className="history">
            <div className="history__content">
                <div className="history__main">
                    <picture>
                        <source srcSet={mapWebp} type="image/webp" />
                        <source srcSet={map} type="image/png" />
                        <img className="historyMap" src={mapWebp} alt="mapa karaibów" />
                    </picture>
                    <div className="historyInfo">
                        <h1 className="historyInfo__title">O Karaibach</h1>
                        <p className="historyInfo__informations">Karaiby zostały odkryte w 1492 roku, przez Krzysztofa Kolumba. Następnie cały obszar został szybko skolonizowany przez cywilzacje zachodnie, stając się ważną częścią szlaków handlowych, przez co stały się miejscem częstego piractwa. Do końca XVII wieku z Tortugi wysyłano pirackie ekspedycje w celu oblegania i rabowania nadmorskich miast. Ważną siedzibą piratów był także Port Royal. Od XIX wieku kolonie stały się niepodległe.</p>
                    </div>
                </div>
                <picture>
                    <source srcSet={pirateStuffWebp} type="image/webp" />
                    <source srcSet={pirateStuff} type="image/png" />
                    <img className="history__footer" src={pirateStuffWebp} alt="pirackie rzeczy" />
                </picture>
                <ScrollBack />
            </div>

        </div>
    );
}

export default History;