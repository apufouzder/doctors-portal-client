import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#203047' }}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary lh-lg my-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eligendi voluptatibus odio nisi vitae quo consectetur nihil, aspernatur commodi aliquam.</p>
                <Link to="/appointment">
                    <button className="btn-style">GET APPOINTMENT</button>
                </Link>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;