import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var nav_item = document.getElementsByClassName('nav-item');

        for(var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove('active');
        }

        localStorage.setItem('page', 'home');

        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(30, 15);
    }
    render() {
        return (
            <section id="Home">
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene" style={{backgroundImage: `url(bundles/fond.jpg)`}}>
                        <div className="img marche2" style={{backgroundImage: `url(bundles/marche2.png)`}} data-depth="0.6"> </div>
                    </section>
                </section>
                <section className="p-absolute o-hidden wrapper-scene">
                    <canvas id="canvas" width="800" height="800"></canvas>
                </section>
                <section className="container-fluid custom-scroll opacity-light oy-auto p-relative wrapper-content">
                    <div className="row justify-content-center mb-5 text-center text-md-left">
                        <div className="col-12 mt-5 text-center">
                            <h1 className="glitch" data-text="Marché de Talensac">Marché de Talensac</h1>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
