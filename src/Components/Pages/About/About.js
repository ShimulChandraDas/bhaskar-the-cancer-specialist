import React from 'react';
import me from '../../../images/me.jpeg'

const About = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-center mt-5 pt-5 pb-5 fw-bold fs-1 text-uppercase text-success'>This is about us</h1>
            <div className='d-flex justify-content-center'>
                <img className='w-20' src={me} alt="" />

            </div>
            <h1><strong>Shimul Chandra Das.</strong></h1>
            <h4>B.B.A, M.B.A  in Accounting</h4>
            <p>  <strong>
                Firstly, I enrolled in this course to fulfill my hobby. but nowadays, I changed my mind. Now My Goals are Continuous Learning., Keep the code simple ,clean and understandable,Maintain code Reusability,Maintain Loggers and Snippets,Learn Debugging Skills and Logical thinking.Keep myself calm ,cool before you start programming.
            </strong></p>
        </div>
    );
};

export default About;