import React, { useRef } from 'react'
import Header from '@components/header/Header'
import Products1 from '@/components/products1/Products1'
import PartnershipOne from '@components/partnership/PartnershipOne'
import Main from '@components/main/Main'
import History from '@components/newHistory/History'
// import History2 from '@components/History/History2'
// import History3 from '@components/History/History3'
import AboutUs from '@components/aboutus/AboutUs'
import PartnershipTwo from '@components/partnership/PartnershipTwo'
import Footer from '@components/footer/footer'

function Home() {
  const home = useRef(null)
  const history = useRef(null)
  const production = useRef(null)
  const partnership = useRef(null)
  const aboutUs = useRef(null)
  const refs = { home, history, production, partnership, aboutUs }
  return (
    <div className="home">
      <Header refs={refs} />
      <Main ref={home} />
      <Products1 ref={production} />
      {/*<History1 ref={history} />*/}
      {/*<History2 />*/}
      {/*<History3 />*/}
      <History />
      <PartnershipOne ref={partnership} />
      <PartnershipTwo />
      <AboutUs ref={aboutUs} />
      <Footer />
    </div>
  )
}

export default Home
