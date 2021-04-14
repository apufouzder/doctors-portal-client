import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 text-white py-5 make-appointment-info">
                        <h5 style={{ color: '#1cc7c1' }}>APPOINTMENT</h5>
                        <h1 className="my-4">Make an appointment <br /> Today</h1>
                        <p className="mb-5 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, suscipit. Perspiciatis, mollitia perferendis. Tempora, cumque?</p>
                        <button className="btn-style">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;