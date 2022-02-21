import React from 'react'
import Home from '../home'
import About from "../about";
import {Footer} from "../home/style";
import linkedin from '../../assest/icons8-linkedin.svg'
import twitter from '../../assest/icons8-twitter.svg'
import instagram from '../../assest/instagram.png'
import facebook from '../../assest/facebook.svg'

function MainPage() {
    return (
        <>
            <Home/>
            <About/>
            <Footer>
                <p className='subscribe'>
                    Subscribe to Atelier Newsletter
                </p>
                <p className='lorem'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius enim
                    in eros elementum
                    tristique.
                </p> <br/><br/>
                <input id='email' type='email'/> <br/>
                <input id='text' type='text'/>
                <div className='link-wrapper'>
                    <div className='border'>
                        <img className='facebook book'
                             src={facebook}/>
                    </div>
                    <div className='border'>
                        <img src={twitter}
                             className='facebook'
                        />
                    </div>
                    <div className='border'>
                        <img src={instagram}
                             className='facebook book'
                        />
                    </div>
                    <div className='border'>
                        <img src={linkedin}
                             className='facebook'
                        />
                    </div>

                </div>
                <div className='hr'>

                </div>
                <div className='texts'>
                    <p>
                        Powered by
                         <span>
                              Webflow
                         </span>
                    </p>
                    <p className='license'>
                        License | style guide | instruction
                    </p>
                </div>
            </Footer>
        </>
    )
}

export default MainPage