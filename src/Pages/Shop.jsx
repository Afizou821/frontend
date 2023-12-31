import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/NewCollections/Newcollection'
import Newsletter from '../Components/Newletter/Newsletter'
export default function Shop() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Newcollection />
      <Newsletter />
    </div>
  )
}
