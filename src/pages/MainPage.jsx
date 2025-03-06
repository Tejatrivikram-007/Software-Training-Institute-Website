import React from 'react'
import Header from '../components/Header'
import MyCarousel from '../components/Carousel'
import Table from '../components/Table'
import Photos from '../components/Photos'
import Testimonial from '../components/Testimonies'
// import AboutUs from './AboutUs'
import '../styles/mainpage.css'
import Footer from './Footer'


const MainPage = () => {
  return (
    <div className='mainp'>
      <Header/>
      <center><p className='ph mh'>Welcome to Spiders</p></center>
      <MyCarousel/>
      <Table/>
      <Photos/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default MainPage
