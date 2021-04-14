import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBellSlash } from '@fortawesome/free-solid-svg-icons'

const AppointmentsByDate = ({ appointments }) => {
    console.log('appointments', appointments);
    return (
        <div className="shadow-sm mt-5" style={{
            background: 'white',
            padding: '17px',
            borderRadius: '5px',
            overflowX: 'scroll'
        }}>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                    <AppointmentShortList appointments={appointments} />
                    :
                    <div className="p-5">
                        <h4 className="lead text-center"> <FontAwesomeIcon icon={faBellSlash} /> No Appointments for this Date</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentsByDate;