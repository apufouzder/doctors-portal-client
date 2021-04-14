import React from 'react';

const Testimonial = (props) => {
    const { name, quote, from, img } = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="card shadow border-0">
                <div className="card-body">
                    <p className=" card-text text-center">{quote}</p>
                </div>
                <div className="card-footer border-0 bg-body d-flex align-items-center">
                    <img className="mx-3" width="60" src={img} alt="" />

                    <div>
                        <h6 className="text-brand">{name}</h6>
                        <p className="m-0">{from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;