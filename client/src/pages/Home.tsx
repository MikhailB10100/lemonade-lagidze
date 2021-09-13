import React from 'react'
import Header from '@components/header/Header'
import Products1 from '@/components/products1/Products1'
import PartnershipOne from '@components/partnership/PartnershipOne'
import Main from '@components/main/Main'
import History1 from '@components/History/History1'
import History2 from '@components/History/History2'
import History3 from '@components/History/History3'
import AboutUs from '@components/aboutus/AboutUs'
import PartnershipTwo from '@components/partnership/PartnershipTwo'
import Footer from '@components/footer/footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Products1 />
      <History1 />
      <History2 />
      <History3 />
      <PartnershipOne />
      <PartnershipTwo />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Home
