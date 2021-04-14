import React from 'react';

const AppointmentShortList = ({ appointments }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary">Name</th>
                    <th className="text-secondary">Phone</th>
                    <th className="text-secondary">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appointment, index) =>
                        <tr key={appointment.name}>
                            <td>{appointment.name}</td>
                            <td>{appointment.number}</td>
                            <td>{appointment.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppointmentShortList;