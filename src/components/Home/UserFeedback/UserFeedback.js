import React, { useEffect, useState } from 'react';
import UserFeedbackCard from '../UserFeedbackCard/UserFeedbackCard';

const UserFeedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://evening-taiga-61842.herokuapp.com/loadReview')
        .then(res => res.json())
        .then(data => {
            setReviews(data)
        })
    }, [])

    return (
        <div className="row">
            {
                reviews.map(review => <UserFeedbackCard review={review}></UserFeedbackCard>)
            }
        </div>
    );
};

export default UserFeedback;