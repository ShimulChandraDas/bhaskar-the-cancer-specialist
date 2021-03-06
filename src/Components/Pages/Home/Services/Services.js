import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div >
            <h2 className='text-center mt-5 pt-5 fw-bold fs-1 text-uppercase text-success'>My Services</h2>


            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;