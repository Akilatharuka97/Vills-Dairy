import React from 'react'

export default function ProductBanner() {
    return (
        <div className='mb-[50px] xl:mb-0'>
            <div className="reveal relative overflow-hidden">
                <picture>
                    <source media="(min-width: 991px)" srcSet="/images/product-page/desktop.png" />
                    <source media="(min-width: 767px)" srcSet="/images/product-page/tab.png" />
                    <img src="/images/product-page/mobile.png" alt="Product Page Banner" className="w-full h-full object-cover" />
                </picture>
            </div>
        </div>
    )
}