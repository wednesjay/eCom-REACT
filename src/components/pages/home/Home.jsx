import React from 'react'
import { Slider } from '../../common/index' 
import { SliderData } from '../../common/slider/SliderData'

import './Home.css'

function Home () {
    return (
        <section className = 'home-card'>
            <h1 className = 'motto'> bland on a whole new level </h1>
            <Slider slides = {SliderData}/>
            <p>taking the fatigue away from figuring out what you want by offering you almost nothing </p>
        </section>
        
    )
}

export default Home;