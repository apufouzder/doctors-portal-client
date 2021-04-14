import React from 'react';
import doctorImg from '../../../images/doctor.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({ doctor }) => {
    console.log(doctor);
    return (
        <div className="col-md-4 text-center">
            {
                doctor.image
                    ? <img style={{ height: '250px' }} src={`data:image/png;base64,${doctor.image.img}`} alt="" className="img-fluid mb-3" />
                    : <img style={{ height: '250px' }} src={doctorImg} alt="" className="img-fluid mb-3" />
            }
            <h5>{doctor.name}</h5>
            <p> <FontAwesomeIcon className="text-brand" icon={faPhoneAlt} /> {doctor.number}</p>
        </div>
    );
};

export default Doctor;