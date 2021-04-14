import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserPlus, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [user, setUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false)
    console.log('isDoctor', isDoctor);
    useEffect(() => {
        fetch('http://localhost:3020/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])
    return (
        <div className="sidebar col-md-2 py-5 px-4 d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span> Dashboard</span>
                    </Link>
                </li>
                {isDoctor &&
                    <div>
                        <li>
                            <Link to="/allPatient" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faCalendar} /> <span> Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/patient" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faUsers} /> <span> Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/prescriptions" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faFileAlt} /> <span> Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addDoctor" className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faUserPlus} /> <span> Add Doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="text-white text-decoration-none">
                                <FontAwesomeIcon icon={faCog} /> <span> Setting</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
            <div>
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;