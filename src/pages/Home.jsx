import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Title from "../components/Title"
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <Categories />
            <Title />
            <Products />
            <Footer />
        </div>
    );
};

export default Home;