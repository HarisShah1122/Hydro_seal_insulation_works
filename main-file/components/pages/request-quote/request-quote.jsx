"use client"

const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label htmlFor="first-name">First Name *</label>
                            <input type="text" id="first-name" placeholder="First Name" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="last-name">Last Name *</label>
                            <input type="text" id="last-name" placeholder="Last Name" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="email">Email Address *</label>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="number">Number *</label>
                            <input type="text" id="number" placeholder="+923001234567" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="company">Company/Organization *</label>
                            <input type="text" id="company" placeholder="Skyware IT Solutions" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label htmlFor="website">Website *</label>
                            <input type="text" id="website" placeholder="https://skywareit.com" />
                        </div>
                        
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>What services can we provide you? *</span>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="Hospitality-Digitalization" />
                            <label style={{marginLeft: '10px'}} htmlFor="Hospitality-Digitalization">Hospitality Digitalization</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-development" />
                            <label style={{marginLeft: '10px'}} htmlFor="web-development">Web Development</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="Networking" />
                            <label style={{marginLeft: '10px'}} htmlFor="Networking">Networking</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="maintenance" />
                            <label style={{marginLeft: '10px'}} htmlFor="maintenance">Maintenance</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="NextGen-IOT" />
                            <label style={{marginLeft: '10px'}} htmlFor="NextGen-IOT">NextGen IOT</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="cyber-security" />
                            <label style={{marginLeft: '10px'}} htmlFor="cyber-security">Cyber Security</label>
                        </div>
                        
                    </div>
                    <label htmlFor="message" className="mb-2">Message *</label>
                    <textarea id="message" placeholder="Type Here"></textarea>
                    <input type="submit" value="Submit Now" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;