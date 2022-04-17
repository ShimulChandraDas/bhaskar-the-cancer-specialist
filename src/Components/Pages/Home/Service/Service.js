import React from 'react';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className={"card-body"}>
                    <h3 className='text-center'>{name}</h3>
                    <p className='text-center'><strong>$ {price}</strong></p>
                    <p className="card-text">{description}</p>
                </div>
                <button type="button" className="btn btn-primary btn-lg">Checkout</button>
            </div>
        </div>



    );
};

export default Service;