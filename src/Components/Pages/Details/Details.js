import React from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Details = () => {
    const { serviceID } = useParams()

    return (
        <div className='container'>
            <h1 className='text-center'>Thank you for select  {serviceID} number package.</h1>
            <div className='  w-50 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter User Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupTel">
                        <Form.Label>Enter Your phone Number</Form.Label>
                        <Form.Control type="tel" placeholder="phone Number" required />
                    </Form.Group>
                </Form>


                <Link to='/checkout'>
                    <button className='  btn btn-success'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;