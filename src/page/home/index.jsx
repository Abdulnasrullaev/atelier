import React from 'react'
import {Homes, Navbar} from './style'

function Home() {
    return (
        <>
            <Navbar>
                <p className="logo">
                    Ateleir
                </p>
                <nav>
                    <li><a href="#">overview</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Template</a></li>
                    <li><a href="#">Contact</a></li>
                </nav>
                <button className="template">buy template</button>
            </Navbar>
            <Homes>
                <p className='title'>
                    WE ARE Atelier Creative Agency
                </p>
                <p className='title2'>
                    Unique UI Kit Template for Creative Agencies
                </p>
                <button className='layout'>
                    view layouts
                </button>
            </Homes>
        </>
    )
}

export default Home