import React from 'react'
import AboutBanner from '../components/about/AboutBanner'
import CallToAction from '../components/homepage/CallToAction'
import AboutHeading from '../components/about/AboutHeading'
import AboutVideo from '../components/about/Aboutvideo'
import AboutVisionMision from '../components/about/AboutVisionMision'
import AboutStats from '../components/about/AboutStats'

export default function page() {
    return (
        <div>
            <AboutBanner />
            <AboutHeading />
            <AboutVideo />
            <AboutVisionMision />
            <AboutStats />
            <CallToAction />
        </div>
    )
}