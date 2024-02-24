import React from 'react'

import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css';

const Header = () => {
   const {pathname} =  useLocation()
  
    const links = [
        // {
        //     title:'image',
        //     path:'/',
        // },
        {
            title: "home",
            path: '/',
            isActive :pathname==='/'&& true
        },
        {
            title: "About",
            path: '/about',
            isActive :pathname.includes('/about')&& true
        },
        {
            title: "Product",
            path: '/product',
            isActive :pathname.includes('/product')&& true

        },
        {
            title: "Cart",
            path: '/cart',
            isActive :pathname.includes('/cart')&& true
        },
        {
            title: "Contact",
            path: '/contact',
            isActive :pathname.includes('/contact')&& true
        },

    ]
    return (
        <div className='wrap'>
            <div className="nav-bar d-flex gap-5">

                {links.map((curr, idx) => (
                    <li key={idx} className={`${curr.isActive && 'border-bottom border-success'}`}
                    > <Link to={curr.path} >{curr.title}  </Link></li>
                ))}         

            </div>
        </div>
    )
}

export default Header