import { NavLink } from "react-router-dom";
import TopDeals from "../../pages/topDeals/TopDeals"
import TopProducts from "../../pages/topProducts/TopProducts"
import TopCategories from "../../pages/topCategories/TopCategories"
import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css"
import DropDown from "../DropDown";
import SearchBar from "../SearchBar";

const Header = () => {
    const [option, setOption] = useState('')
    const handleChange = event => {
        console.log(event.target.value, 'event')
        setOption(event.target.value)
    }
    const navStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : '',
            textDecoration: isActive ? 'none' : 'none',
            color: isActive ? '#fff' : "",

        }
    }

    const options = [
        {
            "type": "Clothing & Accessories",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Home & Garden",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Computers and software",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Electronic",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Automotive",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Jewelry & watches",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Babies & kids",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Health & Beauty Supplies",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Toys & Games",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Appliances",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Sport Equipment & outdoor keys",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Offices supplies",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Pet supplies",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Musical instruments",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Other Products",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Gifts flowers & food",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Video Games",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Books & Magics",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "DVD & Videos",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Music",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        },
        {
            "type": "Matured",
            "img": [
                "https://www.shopping.com/imageProxy?url=https%3A%2F%2Fd7.cnnx.io%2Fimage%2Fobj%2F10104860252%3Bsq%3D400%3Bp%3D0%3Bt%3DooPwmM0WTWKaBwJaSRYmb9GbJiBXgY3tkXkQBO-dj32DTWrXVNLyKC5HFBh4U2t5eAh3xlv8mxACIGAGnYQICNnLTdlBPoFvQ0RQQgxJM8CTnSwlXg%3D%3D"
            ]
        }
    ]
    // let colud = "https://uploads-ssl.webflow.com/60be6e42ecea08f815b762c3/6153b832d6a443c082ea0751_clouds.svg"
    return (
        <>
            <header className="Header">
                <nav>
                    <a href="/" aria-current="page" aria-label="home" >
                        <img src={require("../../assets/logo.png")} className="Logo" alt="logo" />
                    </a>
                    <NavLink className="NavLink" style={navStyles} to='/topDeals'>TopDeals</NavLink>
                    <NavLink style={navStyles} to='/topProducts'>Top Products</NavLink>
                    <NavLink style={navStyles} to='/topCategories'>Top Categories</NavLink>
                </nav>
            </header>
            <div style={{ marginTop: "150px", display: "flex", flexDirection: "row" }}>
                <DropDown
                    size='small'
                    dark
                    squared
                    className='dropdown'
                    options={options}
                    labelColor='white'
                    theme='dark'
                    label='Status'
                    placeholder='select a product'
                    option={option}
                    handleChange={handleChange}


                />

            </div>

        </>


    )
}

export default Header


