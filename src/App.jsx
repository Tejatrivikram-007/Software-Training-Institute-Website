import React from 'react'
// import './global.css'
import MainPage from './pages/MainPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

const App = () => {
  let router= createBrowserRouter([
    {path:'/',element:<MainPage/>},
  {path:'/about',element:<AboutUs/>},
  {path:'/contact',element:<ContactUs/>}
])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
