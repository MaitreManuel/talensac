import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(30, 15);
    }
    render() {
        return (
            <section id="History">
                <section className="p-absolute wrapper-scene">
                    <section id="scene" className="scene">
                        <div className="img background" data-depth="0.2"></div>
                        <div className="img marche" data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid p-relative opacity-medium wrapper-content">
                    <div className="row overlay">
                        <div className="col-12">
                            <h1>Marché de Talensac</h1>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
