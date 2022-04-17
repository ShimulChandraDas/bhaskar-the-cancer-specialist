import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceID } = useParams()
    return (
        <div>
            <h1>Welcome to details {serviceID}</h1>
        </div>
    );
};

export default Details;