import React from 'react';
import '../style/History.scss';
import map from '../images/caribbeanMap.png';
import pirateStuff from '../images/pirateStuff.png';
const History = () => {
    return (
        <div className="history">
            <div className="history__content">
                <div className="history__main">
                    <img className="historyMap" src={map} alt="mapa karaibów" />
                    <div className="historyInfo">
                        <h1 className="historyInfo__title">O Karaibach</h1>
                        <p className="historyInfo__informations">Karaiby zostały odkryte w 1492 roku, przez Krzysztofa Kolumba. Następnie cały obszar został szybko skolonizowany przez cywilzacje zachodnie, stając się ważną częścią szlaków handlowych, przez co stały się miejscem częstego piractwa. Do końca XVII wieku z Tortugi wysyłano pirackie ekspedycje w celu oblegania i rabowania nadmorskich miast. Ważną siedzibą piratów był także Port Royal. Od XIX wieku kolonie stały się niepodległe.</p>
                    </div>
                </div>
                <img className="history__footer" src={pirateStuff} alt="pirackie rzeczy" />
            </div>

        </div>
    );
}

export default History;