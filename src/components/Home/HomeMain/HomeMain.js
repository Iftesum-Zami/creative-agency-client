import React from 'react';
import frame from '../../../images/logos/frame.png';

const HomeMain = () => {
    return (
        <main className="row">
            <div className="col-md-6 pt-5 pb-5">
                <h1>Let’s Grow Your <br/>
                    Brand To The <br/>
                    Next Level
                </h1>
                <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur <br/>
                    adipiscing elit. Purus commodo ipsum duis <br/>
                    laoreet maecenas. Feugiat 
                </p>
                <button type="button" class="btn btn-dark">Hire Us</button>
            </div>

            <div className="col-md-6 pb-5">
                <img src={frame} className="img-fluid" alt=""/>
            </div>
        </main>
    );
};

export default HomeMain;