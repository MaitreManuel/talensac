import React from "react";

import Actuality from "./actuality/Main.js";
import Footer from "./common/Footer.js";
import Gallery from "./gallery/Main.js";
import Header from "./common/Header.js";
import History from "./history/Main.js";

class Root extends React.Component {
    constructor() {
        super();

        this.state = {
            action: localStorage.getItem('page'),
        };

        this.reload = this.reload.bind(this)
    }

    componentWillMount() {
        if(localStorage.getItem('page') == null) {
            localStorage.setItem('page', 'history');
        }
    }

    reload() {
        var state = this.state;
        state.action = localStorage.getItem('page');
        this.setState(state);
    }

    render() {
        var action = this.state.action;

        return (
            <section id="Root">
                <Header reload={this.reload}/>
                {(action === "actualities") && <Actuality/>}
                {(action === "gallery") && <Gallery/>}
                {(action === "history" || action === "home") && <History/>}
                <Footer/>
            </section>
        );
    }
}

module.exports = Root;
