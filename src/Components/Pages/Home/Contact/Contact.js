import React from 'react';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { FaHospitalSymbol } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <div className='container pb-5'>
                <h1 className='text-center pb-5 mt-5 pt-5 fw-bold fs-1 text-uppercase text-success pb-3'>Call us for pre-booking</h1>

                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col'>
                        <div className='card border-0' >
                            <img src="https://png.pngitem.com/pimgs/s/124-1246848_tech-change-the-world-hd-png-download.png" alt="" />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='card p-5 border-0' >
                            <h2 className='pt-4'><strong><AiFillPhone /> </strong>     +880 1837-112254</h2>
                            <h2 className='pt-4'><strong><BsWhatsapp /></strong> +880 1837-651465</h2>
                            <h2 className='pt-4'><strong><AiOutlineMail /></strong> drbashkar@gmail.com</h2>
                            <h4 className='pt-4'><strong><FaHospitalSymbol /></strong>  Ahsania Mission Cancer & General Hospital, Dhaka. Address: Plot # 03, Embankment Drive Way, Sector # 10, Uttara, Dhaka-1230</h4>
                            <h4 className='pt-4'><strong><FaHospitalSymbol /></strong>  Ahsania Mission Cancer & General Hospital, Dhaka. Address: Plot # 03, Embankment Drive Way, Sector # 10, Uttara, Dhaka-1230</h4>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Contact;