import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';

const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teath Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section className="mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1cc7c1', marginBottom: '13px' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-4">
                    {
                        servicesData.map(service => <ServicesDetail key={service.name} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;