import React from 'react';
import { services } from '../../lib/Services';
import ServicesCard from '../cards/ServicesCard';

const Services = () => {
    
    return (
        <div className="text-slate-800 mb-24">
            <div className="text-center container mx-auto">
                <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised <br /> words which do not look even slightly
                    believable.{" "}
                </p>
            </div>

            <div className='container mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }

            </div>
        </div>
    );
};

export default Services;