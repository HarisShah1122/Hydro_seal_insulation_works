import image from "../../../../public/assets/img/technology-solution/tech-solution-one.png";
import Count from "../../common/count";

const Solution = () => {
    return (
        <>
            <div className="technology-solution__one section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                
                                <h2>Core Values</h2>
                                <div className="technology-solution__one-content-service">
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Innovation</h4>
                                            <p>Driving progress through creative and advanced technology solutions.</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Integrity</h4>
                                            <p>Operating with transparency, honesty, and accountability.</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Excellence</h4>
                                            <p>Delivering solutions that exceed expectations.</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Partnership</h4>
                                            <p>Building long-term, trust-based relationships with our clients.</p>
                                        </div>
                                    </div>
                                    <div className="single-service">
                                        <i className="fas fa-check-circle"></i>
                                        <div className="single-service-content">
                                            <h4>Growth</h4>
                                            <p>Empowering clients and employees to achieve sustainable success.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="satisfied-customer-counter">
                                    <div className="counter-wrapper">
                                        <h3 className="counter"><Count number={400}/></h3>
                                        <h3>+</h3>
                                    </div>
                                    <span>Satisficed Customers</span>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution;