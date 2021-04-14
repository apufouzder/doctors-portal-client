import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5 py-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental <br /> Care, on Your Terms</h1>
                        <p className="text-secondary my-5 lh-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iure doloribus architecto temporibus! Ratione corporis incidunt dolorum doloribus dolorem nesciunt eveniet, aliquam aperiam cum modi a asperiores autem tempore fuga! Ratione corporis incidunt dolorum doloribus dolorem nesciunt eveniet, aliquam aperiam cum modi a asperiores autem tempore fuga! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis iure doloribus architecto temporibus! </p>
                        <button className="btn-style">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;