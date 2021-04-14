import React, { useState, useEffect, useContext } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import { UserContext } from '../../../App';

const containerStyle = {
    backgroundColor: '#F4FDFB'
}

const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://lit-fortress-83519.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
                console.log('data', data);
            })
    }, [selectedDate])

    const [totalAppointment, setTotalAppointments] = useState([]);

    useEffect(() => {
        fetch('https://lit-fortress-83519.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setTotalAppointments(data))
    }, [])

    document.title = "Dashboard"
    return (
        <section>

            <div style={containerStyle} className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div style={{ marginLeft: '46px' }} className="col-md-9 mt-5">
                    <div className="row board">
                        <div style={{ background: '#f1536e' }} className="col-md-3 box-style shadow d-flex align-items-center">
                            <div style={{ marginRight: '15px' }}>
                                <h1>{totalAppointment.length - 10}</h1>
                            </div>
                            <div className="box-name">
                                <span>Pending</span>
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div style={{ background: 'darkviolet' }} className="col-md-3 box-style shadow d-flex align-items-center">
                            <div style={{ marginRight: '15px' }}>
                                <h1>{totalAppointment.length - 8}</h1>
                            </div>
                            <div className="box-name">
                                <span>Today's</span>
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div style={{ background: 'darkcyan' }} className="col-md-3 box-style shadow d-flex align-items-center p-3">
                            <div style={{ marginRight: '15px' }}>
                                <h1>{totalAppointment.length}</h1>
                            </div>
                            <div className="box-name">
                                <span>Total</span>
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div style={{ background: 'darkorange' }} className="col-md-3 box-style shadow d-flex align-items-center">
                            <div style={{ marginRight: '15px' }}>
                                <h1>{totalAppointment.length + 5}</h1>
                            </div>
                            <div className="box-name">
                                <span>Total</span>
                                <p>Patients</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Calendar
                                className="new-style shadow"
                                onChange={handleDateChange}
                                value={new Date()}
                            />
                        </div>
                        <div className="col-md-6">
                            <AppointmentsByDate appointments={appointments} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;