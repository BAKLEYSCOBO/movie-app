import React from 'react'
import Image from "./image/1200px-Logo-YTS.svg.png"

const Navbar = () => {
  return (
    <div className='nav'>
        <nav>
            <img className='image' src={Image} />
            <ul>
                <li><a href='#'>Movielist</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar