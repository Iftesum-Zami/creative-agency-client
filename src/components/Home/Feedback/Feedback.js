import React, { useState } from 'react';
import { useEffect } from 'react';
import customer1 from '../../../images/customer1.png';
import customer2 from '../../../images/customer2.png';
import customer3 from '../../../images/customer3.png';
import FeedbackCard from '../FeedbackCard/FeedbackCard';

const localReviews = [
    {
        id: '1',
        name: 'Nash Patrik',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1
    },
    {
        id: '2',
        name: 'Miriam Barron',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer2
    },
    {
        id: '3',
        name: 'Bria Malone',
        designation: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer3
    },
]

const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/loadReview')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])

    return (
        <div className="mt-5 mb-5">
            <h2 className="text-center">Clients <span style={{color: '#7AB259'}}>Feedback</span></h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <FeedbackCard review={review}></FeedbackCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;