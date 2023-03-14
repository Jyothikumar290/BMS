import React from 'react'
import img from './images/img.jpeg'

const Content = () => {

    return (
        <div class="mySlides">
            <h3>Recommended Movie's</h3>
            <div class="numbertext-1">
                <img src={img} alt="M1" width={100} />
            </div>
            <div class="numbertext-2">
                <img src={img} alt="M1" width={100} />
            </div>
            <div class="numbertext-3">
                <img src={img} alt="M1" width={100} />
            </div>
            <div class="numbertext-4">
                <img src={img} alt="M1" width={100} />
            </div>
        </div>
    )
}

export default Content