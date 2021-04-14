import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    console.log(doctors);
    useEffect(() => {
        fetch('http://localhost:3020/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <section>
            <div className="container">
                <h5 className="text-brand text-center mb-5">OUR DOCTORS</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;