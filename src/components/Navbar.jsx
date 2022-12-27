import React from 'react';
import "../App";


const Navbar = () => {
    return (
        <>
            <header className="header">

                <div className="header-1">

                    <a href="#" className="logo"> <i className="fas fa-book"></i> bookCity </a>

                    <form action="" className="search-form">
                        <input type="search" name="" placeholder="Tìm kiếm..." id="search-box"></input>
                        <label htmlFor="search-box" className="fas fa-search"></label>
                    </form>

                    <div className="icons">
                        <div id="search-btn" className="fas fa-search"></div>
                        <a href="#" className="fas fa-heart"></a>
                        <a href="#" className="fas fa-shopping-cart"></a>
                        <div id="login-btn" className="fas fa-user"></div>
                    </div>

                </div>

                <div className="header-2">
                    <nav className="navbar1">
                        <a href="#home">Trang chủ</a>
                        <a href="#featured">Sản phẩm</a>
                        <a href="#reviews">Liên hệ</a>
                    </nav>
                </div>

            </header>
            <nav className="bottom-navbar">
                <a href="#home" className="fas fa-home"></a>
                <a href="#featured" className="fas fa-list"></a>
                <a href="#reviews" className="fas fa-comments"></a>
            </nav>
        </>
    )
}

export default Navbar