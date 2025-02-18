
import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
// import Routers from '../Router/Routers'
import Website from '../Pages/Website'

const Layout = () => {
  return (
    <>
    
    <Header />
    <div>
      <Website />
    </div>
    <Footer />
    </>
  )
}

export default Layout
