import React from 'react'
import ProductBanner from '../components/product/ProductBanner'
import ProductSection from '../components/product/ProductSection'
import CallToAction from '../components/homepage/CallToAction'

export default function page() {
  return (
    <div>
        <ProductBanner />
        <ProductSection />
        <CallToAction />
    </div>
  )
}
