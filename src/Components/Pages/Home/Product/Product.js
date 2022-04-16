import React from 'react';

const Product = ({ product }) => {
    const { img, name } = product;
    return (
        <div className="card gx-5 col-sm-12 col-md-6 col-lg-4" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className={"card-body"}>
                <p className="card-text">{name}</p>
            </div>
            <button type="button" className="btn btn-primary btn-lg">Large button</button>
        </div>
    );
};

export default Product;