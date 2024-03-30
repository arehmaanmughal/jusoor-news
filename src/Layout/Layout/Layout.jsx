import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <>
        <Navbar />
          {props.children}
        <Footer />
    </>
  )
}

export default Layout