import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://lit-fortress-83519.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    document.title = "All Patients"
    return (
        <div className="row" style={{ backgroundColor: "#F4FDFB", height: '100vh' }}>
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10 p-4 mt-4">
                <div className="shadow-sm" style={{
                    background: 'white',
                    marginLeft: '20px',
                    padding: '17px',
                    borderRadius: '5px'
                }}>
                    <h5 className="text-brand mb-4">All Patients</h5>
                    <AppointmentDataTable appointments={appointments} />
                </div>
            </div>
        </div>
    );
};

export default AllPatients;