import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, serServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services') 
        .then(res => res.json())
        .then(data => serServices(data));

    },[])

    return (
        <div className='mt-4'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-orange-600 uppercase'>Kid Product</h3>
                <h2 className='text-5xl uppercase'>Our Child Product </h2>
                <p>Our Kid Product is too beautfull </p>
            </div>
            <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }  
            </div>
            
        </div>
    );
};

export default Services;