import React from 'react'

export default function AboutBanner() {
    return (
        <div className='mb-[50px] xl:mb-[100px]'>
            <div className="reveal relative overflow-hidden">
                <picture>
                    <source media="(min-width: 991px)" srcSet="/images/about-page/desktop.png" />
                    <source media="(min-width: 767px)" srcSet="/images/about-page/tab.png" />
                    <img src="/images/about-page/mobile.png" alt="About Page Banner" className="w-full h-full object-cover" />
                </picture>
            </div>
        </div>
    )
}