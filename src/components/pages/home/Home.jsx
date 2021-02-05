import React from 'react'
import { Slider } from '../../common/index' 
import { SliderData } from '../../common/slider/SliderData'

import './Home.css'

function Home () {
    return (
        <section className = 'home-card'>
            <div className = "home-background">
            <h1 className = 'title' id = 'title'>ZA pizzeria</h1>
            <h2 className = 'motto'>bland on a whole new level</h2>
            <Slider slides = {SliderData}/>
            <p className = 'joke'>taking the fatigue away from figuring out what you want by offering you almost nothing </p>
            </div>
        </section>
        
    )
}

export default Home;