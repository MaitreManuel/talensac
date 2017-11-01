import React from "react";

import Footer from "./common/Footer.js";
import Gallery from "./gallery/Main.js";
import Header from "./common/Header.js";
import History from "./history/Main.js";

class Root extends React.Component {
    render() {
        return (
            <section id="Root">
                <Header/>
                <Gallery/>
                <Footer/>
            </section>
        );
    }
}

module.exports = Root;
