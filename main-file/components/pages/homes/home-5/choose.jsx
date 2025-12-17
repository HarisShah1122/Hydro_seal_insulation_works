import image1 from "../../../../public/assets/img/why-choose-us/why-choose-us-four-2.png";
import image2 from "../../../../public/assets/img/why-choose-us/why-choose-us-four.png";

const Choose = () => {
    return (
        <>
        <div className="why-choose-us__four section-padding" >
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="why-choose-us__four-image">
                            <img src={image1.src} alt="image" className="why-choose-us__four-floating-image animate-y-axis-slider" />
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-9">
                        <div className="why-choose-us__four-left">
                            <div className="why-choose-us__four-title">
                                <span className="subtitle-one">Why Chose Us</span>
                                <h2>Skyware Your Trusted IT Partner</h2>
                                <div className="why-choose-us__four-content-service">
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Proven Expertise</h4>
                                            <p>Proven expertise in delivering end-to-end IT solutions</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Client-Focused</h4>
                                            <p>Client-focused approach with measurable results</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Innovation</h4>
                                            <p>Commitment to innovation and continuous improvement</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Professional Team</h4>
                                            <p>Dedicated team of professionals with industry knowledge</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Trust & Reliability</h4>
                                            <p>Long-term partnerships built on trust and reliability</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-choose-us__four-progress-bar">
                                    {/* <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>75%</span>
                                        </div>
                                        <h3>Successful</h3>
                                    </div> 
                                     <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>85%</span>
                                        </div>
                                        <h3>Branching</h3>
                                    </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Choose;