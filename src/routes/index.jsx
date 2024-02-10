import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Contect from '../pages/Contact/Contect'
import { BrowserRouter } from 'react-router-dom'
const AppRouter = () => {
    return (
     
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/contact' element={<Contect/>} />
            {/* <Route path='/test' element={<h6>test</h6>} /> */}

        </Routes>
     
    )
}

export default AppRouter