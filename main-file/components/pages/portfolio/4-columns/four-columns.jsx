import React, { useState } from 'react';
import portfolioData from '../../../data/portfolio-data';

const showPortfolioItem = 4;

const FourColumns = () => {
    const portfolioItem = portfolioData;
    const [items, setItems] = useState(portfolioItem);
    const [next, setNext] = useState(showPortfolioItem);
    const handleLoadData = () => {
        setNext(value => value + 1)
    }
    return (
        <div className="portfolio__one section-padding-three">
            <div className="container-fluid">
                <div className="row dark_image">
                    {portfolioItem?.slice(0, next)?.map((data, id) => (
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-25" key={id}>
                            <div className="portfolio__one-item">
                                <div className="portfolio__one-item-content">
                                    <div className="portfolio__one-item-content-wrapper">
                                        <span className="client-badge"><i className="fa-regular fa-horizontal-rule"></i>{data.client}</span>
                                        <h6>{data.title}</h6>
                                        <p className="scope-text"><strong>Scope:</strong> {data.scope}</p>
                                        <p className="solution-text"><strong>Solution:</strong> {data.solution}</p>
                                        <p className="result-text"><strong>Result:</strong> {data.result}</p>
                                        <span className="category-badge">{data.category}</span>
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

export default FourColumns;