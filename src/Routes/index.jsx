import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ContactUs from '../Pages/ContactUs/ContactUs'
import PodCast from '../Pages/PodCast/PodCast'
import SinglePost from '../Pages/SinglePodcast/SinglePost'
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy'

const Index = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contactUs' element={<ContactUs/>}/>
                <Route path='/podcast' element={<PodCast/>}/>
                <Route path='/post' element={<SinglePost/>}/>
                <Route path='/privacyPolicy' element={<PrivacyPolicy/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Index