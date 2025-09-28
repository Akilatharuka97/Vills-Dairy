import React from 'react'

export default function ContactBanner() {
    return (
        <div className='mb-[50px] xl:mb-0'>
            <div className="reveal relative overflow-hidden">
                <picture>
                    <source media="(min-width: 991px)" srcSet="/images/contact-page/desktop.png" />
                    <source media="(min-width: 767px)" srcSet="/images/contact-page/tab.png" />
                    <img src="/images/contact-page/mobile.png" alt="Contact Page Banner" className="w-full h-full object-cover" />
                </picture>
            </div>
        </div>
    )
}