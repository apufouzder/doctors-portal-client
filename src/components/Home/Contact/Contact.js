import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section py-5 my-5">
            <div className="container">
                <div className="header-section text-center">
                    <h5 className="text-brand">CONTACT US</h5>
                    <h1 className="mb-5">Always contact with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="input-group mb-3">
                            <input className="form-control" placeholder="Enter Email" type="text" />
                        </div>
                        <div className="input-group mb-3">
                            <input className="form-control" placeholder="Subject" type="text" />
                        </div>
                        <div className="input-group mb-3">
                            <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                        </div>
                        <div className="input-group mx-auto">
                            <button type="button" className="btn-style">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;