import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';

const showPortfolioItem = 4;

const TwoColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 2)
    }
    return (
        <div className="portfolio__two section-padding">
            <div className="container">
                <div className="row">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-lg-6" key={id}>
                            <div className="portfolio__two-single-item" >
                                <div className="portfolio__two-single-item-content">
                                    <div className="portfolio__two-single-item-content-left">
                                        <h3 >{data.title}</h3>
                                        
                                        <div style={{ marginBottom: '20px' }}>
                                            <p >
                                                <strong >Client:</strong> {data.client}
                                            </p>
                                        </div>

                                        <div>
                                            <p >
                                                <strong >Scope:</strong> {data.scope}
                                            </p>
                                        </div>

                                        <div >
                                            <p >
                                                <strong >Solution:</strong> {data.solution}
                                            </p>
                                        </div>

                                        <div >
                                            <p>
                                                <strong >Result:</strong> {data.result}
                                            </p>
                                        </div>

                                        <span >{data.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {next < items.length && (
                    <div className="row mt-70">
                        <div className="col-xl-12 t-center">
                            <button onClick={handleLoadData} className="btn-one">Load More</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TwoColumns;