import React from "react";

import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import History from "./history/Main.js";

class Root extends React.Component {
    render() {
        return (
            <section id="Root">
                <History/>
            </section>
        );
    }
}

module.exports = Root;
