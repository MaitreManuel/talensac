import React from "react";

import Home from "./home/Main.js";
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
        var state = this.state;

        if(localStorage.getItem('page') == null) {
            localStorage.setItem('page', 'home');
            state.action = localStorage.getItem('page');
            this.setState(state);
        }
    }

    reload() {
        var state = this.state;
        state.action = localStorage.getItem('page');
        this.setState(state);
        location.reload();
    }

    render() {
        var action = this.state.action;

        return (
            <section id="Root">
                <Header reload={this.reload}/>
                {(action === "gallery") && <Gallery/>}
                {(action === "home") && <Home/>}
                {(action === "history") && <History/>}
                <Footer/>
            </section>
        );
    }
}

module.exports = Root;
