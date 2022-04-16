import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {

    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };


    return (
        <div className='d-flex g-2 '>
            <div className='pt-5  mx-5 ' >
                <h1>Hi! I am Dr. Bhaskar Chakraborty.</h1>
                <h4 className='text-center'>Consultant (Oncology)</h4>
                <h6 className='text-center'><strong>MBBS,FCPS (Radiotherapy)
                    MRT, IGRT, SBRT, SRS</strong></h6>
                <p className='pt-5'>Consultant of  radiation oncologist at Ahsania Mission cancer an General hospital. Assistant Professor in Department of Oncology at Khawaja Yunus Ali Medical College & Hospital & Cancer Centre. Worked as Register, Senior Register at Khawaja Yunus Ali Medical College & Hospital & Cancer Centre. Trained in advanced Radiotherapy & Chemotherapy Techniques </p>
            </div>

            <img src="https://ihlbd.org/wp-content/uploads/2021/03/25.jpg" alt="" />




        </div>
    );
};

export default Banner;