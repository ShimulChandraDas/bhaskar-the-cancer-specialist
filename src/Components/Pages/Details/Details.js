import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { serviceID } = useParams()
    return (
        <div>
            <h1 className='text-center'>Welcome to details {serviceID}</h1>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='  btn btn-success'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;