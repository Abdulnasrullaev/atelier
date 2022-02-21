import React from "react";
import {Abouts, Service} from "./style";
import template1 from '../../assest/template1.png'
import template2 from '../../assest/template2.png'
import template3 from '../../assest/template3.png'
import portfolio1 from '../../assest/portfolio1.png'
import portfolio2 from '../../assest/portfolio2.png'
import portfolio3 from '../../assest/portfolio3.png'
import portfolio4 from '../../assest/portfolio4.png'
import single from '../../assest/singleProject.png'
import aboutCompany from '../../assest/aboutCompnay.png'
import background from '../../assest/backgroundImage.jpg'
import triangle1 from '../../assest/triangle.png'
import triangle2 from '../../assest/triangle2.png'
import triangle3 from '../../assest/triangle3.png'
import image1 from '../../assest/IMAGE.png'
import image2 from '../../assest/IMAGE (1).png'
import image3 from '../../assest/IMAGE (2).png'
import image4 from '../../assest/IMAGE (3).png'
import instagram from '../../assest/instagram.png'

const About = () => {
    return (
        <>
            <Abouts>
                <p className='layout'>
                    Our Core Layouts
                </p>
                <p className='pages'>
                    Template Pages
                </p>
                <div className='card-wrapper'>
                    <div className='cards'>
                        <img alt='template'
                             src={template1}/>
                        <p className='land'>
                            Landing vr.1
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={template2}/>
                        <p className='land'>
                            Landing vr.2
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={template3}/>
                        <p className='land'>
                            Landing vr.3
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={portfolio1}/>
                        <p className='land'>
                            portfolio 1
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={portfolio2}/>
                        <p className='land'>
                            portfolio 1
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={portfolio3}/>
                        <p className='land'>
                            portfolio 1
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={portfolio4}/>
                        <p className='land'>
                            portfolio 1
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={single}/>
                        <p className='land'>
                            single project
                        </p>
                    </div>
                    <div className='cards'>
                        <img src={aboutCompany}/>
                        <p className='land'>
                            about company
                        </p>
                    </div>
                </div>
                <img className='background'
                     src={background}/>
            </Abouts>
            <Service>
                <p className='title'>
                <span>
                Our Core Features
            </span> <br/>
                    our services
                </p>
                <div className='card-wrappers'>
                    <div className='card'>
                        <img src={triangle1}
                             alt='something'/>
                        <p className='design'>Web Design</p>
                        <p className='text'>
                            Suspendisse varius enim in <br/>
                            <span>cursus id rutrum imperdiet. eros elementum tristique.</span>
                        </p>
                    </div>
                    <div className='card'>
                        <img src={triangle2}
                             alt='something'/>
                        <p className='design'>UX/UI
                            design</p>
                        <p className='text'>
                            Suspendisse varius enim in <br/>
                            <span>
    cursus id rutrum imperdiet.
                                eros elementum tristique.
                            </span>
                        </p>
                    </div>
                    <div className='card'>
                        <img src={triangle3}
                             alt='something'/>
                        <p className='design'>SEO &
                            Marketing</p>
                        <p className='text'>
                            Suspendisse varius enim in <br/>
                            <span>cursus id rutrum imperdiet. eros elementum tristique.</span>
                        </p>
                    </div>
                </div>
                <hr style={{
                    margin: '50px auto',
                    width: '70%'
                }}/>
                <br/>
                <div className='img-wrapper'>
                    <div className='img'>
                        <img src={instagram}
                             className='instagram'
                             alt='ffkfkf'/> <br/>
                        <img src={image1}/>
                    </div>
                    <div className='img'>
                        <img src={instagram}
                             className='instagram'
                             alt='ffkfkf'/> <br/>
                        <img src={image2}/>
                    </div>
                    <div className='flash'>
                        <img src={instagram}
                             className='books'/>
                        <p className='follow'>
                            Follow me on
                        </p>
                        <button id='text'>
                            Instagram
                        </button>
                    </div>
                    <div className='img'>
                        <img src={instagram}
                             className='instagram'
                             alt='ffkfkf'/> <br/>
                        <img src={image3}/>
                    </div>
                    <div className='img'>
                        <img src={instagram}
                             className='instagram'
                             alt='ffkfkf'/> <br/>
                        <img src={image4}/>
                    </div>
                </div>
            </Service>
        </>
    );
};

export default About;