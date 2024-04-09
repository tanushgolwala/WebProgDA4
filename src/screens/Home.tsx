import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destinations from "../components/Destinations";
import Search from "../components/Search";
import Selects from "../components/Select";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";


const Home: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero id="home" />
            <Destinations id="destinations" />
            <Search id="search" />
            <Selects id="select" />
            <Carousel id="catalogue" />
            <Footer />
        </div>
    );
};

export default Home;