import React from 'react';
import wilson from '../../../images/wilson.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore consectetur alias vel magnam ut deleniti! consectetur adipisicing elit.',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials py-5 my-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-brand">TESTIMONIAL</h5>
                    <h1>What Our Patients <br /> Says</h1>
                </div>
                <div className="card-deck mt-5">
                    <div className="row">
                        {
                            testimonialData.map(testimonial => <Testimonial key={testimonial.name} testimonial={testimonial} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;