import React from "react";


// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
function Home() {
    return (
        <>
            <Navbar /> <Jumbotron /> <Card /> <Footer />
        </>

    );
}


export default Home;
