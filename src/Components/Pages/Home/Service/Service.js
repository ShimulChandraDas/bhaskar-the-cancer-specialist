import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { name, img, id, description, price } = service;
    const navigate = useNavigate();

    const navigateToCheckout = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 '>
            <div className="card " style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className={"card-body"}>
                    <h4 className='text-center'>{name}</h4>
                    <p className='text-center'><strong>$ {price}</strong></p>
                    <p className="card-text">{description}</p>
                </div>
                <button onClick={() => navigateToCheckout(id)} type="button" className="btn btn-primary btn-lg">Checkout</button>
            </div>
        </div>



    );
};

export default Service;