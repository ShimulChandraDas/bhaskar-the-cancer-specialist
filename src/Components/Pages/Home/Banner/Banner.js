import React from 'react';


const Banner = () => {

    return (
        <>

            <div className='container mt-2  row row-cols-1 row-cols-md-2 g-5'>
                <div className='col'>
                    <div className='card border-0'>
                        <img className='w-50 ' src="https://ihlbd.org/wp-content/uploads/2021/03/25.jpg" alt="" />
                    </div>
                </div>
                <div className='col'>
                    <div className='card border-0'>

                        <h3 className='fw-bold'>Hi! I am Dr. Bhaskar Chakraborty.</h3>
                        <h6 className='text-center'>Consultant (Oncology)</h6>
                        <h6 className='text-center'><strong>MBBS,FCPS (Radiotherapy)
                            MRT, IGRT, SBRT, SRS</strong></h6>
                        <p className='pt-5'>Consultant of  radiation oncologist at Ahsania Mission cancer an General hospital. Assistant Professor in Department of Oncology at Khawaja Yunus Ali Medical College & Hospital & Cancer Centre. Worked as Register, Senior Register at Khawaja Yunus Ali Medical College & Hospital & Cancer Centre. Trained in advanced Radiotherapy & Chemotherapy Techniques </p>
                    </div>
                </div>

            </div>


        </>

    );
};

export default Banner;