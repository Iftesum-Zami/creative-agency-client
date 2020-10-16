import React, { useEffect } from 'react';
import { useState } from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import service4 from '../../../images/icons/service4.png';
import service5 from '../../../images/icons/service5.png';
import SingleServiceCardAdmin from '../SingleServiceCardAdmin/SingleServiceCardAdmin';

const localServices = [
    {
        id: 1,
        image: service1,
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        id: 2,
        image: service2,
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        id: 3,
        image: service3,
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
    {
        id: 4,
        image: service4,
        title: 'Content Writing',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
    {
        id: 5,
        image: service5,
        title: 'Academic Care',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    },
]

const ServiceCardsAdmin = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://evening-taiga-61842.herokuapp.com/loadService')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='row'>
                {
                    services.map(service => <SingleServiceCardAdmin service={service}></SingleServiceCardAdmin>) 
                }
            </div>
        </div>
    );
};

export default ServiceCardsAdmin;