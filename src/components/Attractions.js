import React from 'react';
import '../style/Attractions.scss';
import { ReactComponent as BeachIcon } from '../svg/iconBeach.svg';
import { ReactComponent as ShipIcon } from '../svg/iconShip.svg';
import { ReactComponent as PirateIcon } from '../svg/iconPirate.svg';
import { ReactComponent as NatureIcon } from '../svg/iconNature.svg';
import { ReactComponent as DivingIcon } from '../svg/iconDiving.svg';
import { ReactComponent as RumIcon } from '../svg/iconRum.svg';
import { ReactComponent as PeopleIcon } from '../svg/iconPeople.svg';
import { ReactComponent as CultureIcon } from '../svg/iconCulture.svg';

const Attractions = () => {
    return (
        <>
            <div className="attractions">
                <div className="attractions__banner"></div>
                <div className="attractionsList">
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <BeachIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Rajskie plaże</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <ShipIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Żeglowanie</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <PirateIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Piraci</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <NatureIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Natura</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <DivingIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Nurkowanie</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <RumIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Rum</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <PeopleIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Ludzie</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="attractionsList__item">
                        <div className="attractionsList__attraction">
                            <CultureIcon className="attractionsList__attractionIcon" />
                            <p className="attractionsList__attractionName">Kultura</p>
                        </div>
                        <p className="attractionsList__attractionDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Attractions;