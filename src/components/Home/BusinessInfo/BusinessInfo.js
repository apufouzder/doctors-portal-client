import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Brooklyn, NY 1004 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+1 325-125 465',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {

    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard key={info.title} info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;