import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';


const AppointmentCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-4">
            <div className="card p-3 shadow border-0">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACE AVAILABLE</p>
                    <button onClick={openModal} className="btn-style">BOOK APPOINTMENT</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;