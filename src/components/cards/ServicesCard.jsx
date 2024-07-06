import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <Image src={img} alt="Shoes" width={430} height={120} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <h6 className='text-primary font-semibold'>Price : ${price}</h6>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;