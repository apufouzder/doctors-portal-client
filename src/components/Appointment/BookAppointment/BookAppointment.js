import React from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';

const bookingData = [
    {
        _id: 'sfs23fs5df2sdf3df11',
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '7:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'sfs23fs5df2d2sdf3df11',
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '8:30 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'sfs2d5fds5df2sdf3df11',
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        _id: 'sfs23fs9rt6tf2sdf3df11',
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        _id: 'sfs23kh6gdf2sdf3df11',
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8:30 AM - 9:30 AM',
        totalSpace: 10
    },
    {
        _id: 'sfs23li5th2sdf3df11',
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '6:00 AM - 7:00 AM',
        totalSpace: 10
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center text-brand">Available Appointment on {date.toDateString()}</h2>
                <div className="row mt-5">
                    {
                        bookingData.map(booking => <AppointmentCard booking={booking} date={date} key={booking.id} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;