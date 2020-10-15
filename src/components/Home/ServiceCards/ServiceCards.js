import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import SingleServiceCard from '../SingleServiceCard/SingleServiceCard';

const services = [
    {
        id: 1,
        img: service1,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        id: 2,
        img: service2,
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        id: 3,
        img: service3,
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
]

const ServiceCards = () => {
    return (
        <div>
            <h2 className='text-center mb-5'>Provide awesome <span style={{color: '#7AB259'}}>services</span></h2>
            <div className='row'>
                {
                    services.map(service => <SingleServiceCard service={service}></SingleServiceCard>) 
                }
            </div>
        </div>
    );
};

export default ServiceCards;