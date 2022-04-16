import React from 'react';

import treat1 from '../../../../images/treatment1.jpg';
import treat2 from '../../../../images/treatment2.jpg';
import treat3 from '../../../../images/treatment3.jpg';
import Product from '../Product/Product';

const Products = () => {
    const treatment = [
        { id: 1, name: 'Radiology', img: treat1 },
        { id: 2, name: 'Fiver', img: treat2 },
        { id: 3, name: 'Sickness', img: treat3 }
    ]
    return (
        <div className='container'>
            <h1 className='text-center'>our services</h1>
            <div className='row'>
                {
                    treatment.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>

        </div>
    );
};

export default Products;