import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import icon from '../../../../public/assets/img/icon/blog-details-quote.png';
import image from '../../../../public/assets/img/blog/blog-details.png';
import avatar1 from '../../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../../public/assets/img/avatar/avatar-3.jpg';

const BlogSingleMain = ({singleData}) => {
    const category = singleData?.category || 'Technology';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-8">
                        <div className="blog__details-thumb">
                            <span className="date">{singleData.date} December 2024</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                            </div>
                        <div className="blog__details-content">
                            <div className="blog__details-content-top">
                                <span>
                                    <i className="fa fa-user"></i>
                                    by {singleData.name}
                                </span>
                                <span>
                                    <i className="fa fa-folder-open"></i>
                                    {singleData.category}
                                </span>
                                <span>
                                    <i className="fa fa-comments"></i>
                                    Comments ({singleData.comment})
                                </span>
                            </div>
                            <h2>{singleData.title}</h2>
                            <p>{singleData.content?.introduction}</p>
                            <p>{singleData.content?.whyItMatters || singleData.content?.keyBenefits || singleData.content?.benefits}</p>
                            {singleData.content?.keyServices && (
                                <>
                                    <h2>Key IT Services in Hospitality Management</h2>
                                    {singleData.content.keyServices.map((service, index) => (
                                        <div key={index} style={{ marginBottom: '20px' }}>
                                            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#051634' }}>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            {singleData.content?.whyChooseNextjs && (
                                <>
                                    <h2>Why Choose Next.js for Website Building?</h2>
                                    {singleData.content.whyChooseNextjs.map((reason, index) => (
                                        <div key={index} style={{ marginBottom: '20px' }}>
                                            <h3 style={{ fontSize: '20px', marginBottom: '10px', color: '#051634' }}>{reason.title}</h3>
                                            <p>{reason.description}</p>
                                        </div>
                                    ))}
                                </>
                            )}
                            
                            {singleData.content?.stepsToBuild && (
                                <>
                                    <h2>Steps to Build a Website with Next.js</h2>
                                    {singleData.content.stepsToBuild.map((step, index) => (
                                        <div key={index} style={{ marginBottom: '20px', padding: '15px', borderLeft: '4px solid #051634', backgroundColor: '#f8f9fa' }}>
                                            <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#051634' }}>Step {step.step}: {step.title}</h3>
                                            <p>{step.description}</p>
                                        </div>
                                    ))}
                                </>
                            )}

                            {singleData.content?.useCases && (
                                <>
                                    <h2>Use Cases of Next.js Websites</h2>
                                    <ul style={{ marginBottom: '20px' }}>
                                        {singleData.content.useCases.map((useCase, index) => (
                                            <li key={index} style={{ marginBottom: '8px', fontSize: '16px' }}>{useCase}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            
                            {singleData.content?.benefits && (
                                <>
                                    <h2>Benefits for Hotels and Guests</h2>
                                    <div style={{ display: 'flex', gap: '30px', marginBottom: '20px' }}>
                                        <div>
                                            <h4 style={{ color: '#051634', marginBottom: '10px' }}>For Hotels:</h4>
                                            <p>{singleData.content.benefits.hotels}</p>
                                        </div>
                                        <div>
                                            <h4 style={{ color: '#051634', marginBottom: '10px' }}>For Guests:</h4>
                                            <p>{singleData.content.benefits.guests}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                            
                            <h2>{singleData.content?.finalThoughts ? 'Final Thoughts' : `The Future of ${singleData.category}`}</h2>
                            <p>{singleData.content?.finalThoughts || singleData.content?.future}</p>
                        </div>
                        <div className="blog__details-pagination">
                            <div className="blog__details-pagination-btn blog__details-pagination-prev">
                                <Link href="/blog/software-development-agility-a-primer" className="pagination-btn">
                                    <i className="fa fa-arrow-left"></i>
                                </Link>
                                <div className="blog__details-pagination-text">
                                    <span>Previous post</span>
                                    <span>Insure your peace of mind</span>
                                </div>
                            </div>
                            <div className="blog__details-pagination-btn blog__details-pagination-next">
                                <div className="blog__details-pagination-text">
                                    <span>Next post</span>
                                    <span>Coverage you can count on</span>
                                </div>
                                <Link href="/blog/cloud-computing-solutions-for-business" className="pagination-btn">
                                    <i className="fa fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="blog__details-comments">
                            <h3>3 Comment</h3>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar2.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Stanio lainto</h5>
                                        <span>February 16, 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                            <div className="blog__details-single-comment">
                                <div className="blog__details-single-comment-user-pic">
                                    <img src={avatar3.src} alt="image" />
                                </div>
                                <div className="blog__details-single-comment-body">
                                    <div className="blog__details-single-comment-body-top">
                                        <h5>Court Henry</h5>
                                        <span>February 16, 2024</span>
                                        <Social />
                                    </div>
                                    <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a reader will be distrol acted laoreet Aliquam fact that a reader will be distrol </p>
                                    <Link href="#" className="comment-reply-btn">Reply</Link>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="blog__details-comment-form">
                            <h3>Leave a comment</h3>
                            <p>By using form u agree with the message sorage, you can contact us directly now By using form agree with the message sorage, you can contact us directly now</p>
                            <input type="text" placeholder="Name" />
                            <textarea placeholder="Message here..."></textarea>
                            <input type="submit" value="Sent Message" />
                        </form>
                    </div>
                    <div className="col-xl-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default BlogSingleMain;