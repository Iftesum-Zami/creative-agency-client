import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel3 from '../../../images/carousel3.png';
import carousel4 from '../../../images/carousel4.png';
import carousel5 from '../../../images/carousel5.png';

const carouselPhotos = [
    {img: carousel1}, {img: carousel2}, {img: carousel3}, {img: carousel4}, {img: carousel5}
]

const CarouselBody = () => {
    const carouselBodyStyle = {
        backgroundColor: "#111430",
    }

    return (
        <div style={carouselBodyStyle}>
            <h2 className="text-center text-white pt-5">Here are some of <span style={{color: '#7AB259'}}>our works</span></h2>
            {/* {
                carouselPhotos.map(photos => <CarouselCard photos={photos}></CarouselCard>)
            } */}
            <CarouselCard></CarouselCard>
        </div>
    );
};

export default CarouselBody;