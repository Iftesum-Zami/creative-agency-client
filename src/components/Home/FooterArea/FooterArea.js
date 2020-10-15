import React from 'react';

const FooterArea = () => {
    return (
        <footer style={{backgroundColor: '#FBD062'}}>
            <div className="container">
                <div className="row">

                    <div className="col-md-6 pt-5">
                        <h2 className="mb-4">Let us handle your <br/> project, professionally.</h2>
                        <small>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</small>
                    </div>

                    <div className="col-md-6  pt-5 pb-5">
                        <form action="">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email address"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-dark"> Submit </button>
                            </div>
                        </form>

                    </div>
                </div>
               <p style={{fontSize: '12px'}} className="text-center pb-5">copyright Orange labs 2020</p>
            </div>
        </footer>
    );
};

export default FooterArea;