import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var nav_item = document.getElementsByClassName('nav-item');

        for(var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove('active');
        }

        document.querySelector('#actualities').classList.add('active');
        localStorage.setItem('page', 'actualities');

        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(30, 15);
    }
    render() {
        return (
            <section id="Actuality">
                <section className="container-fluid custom-scroll opacity-dark oy-auto p-relative wrapper-content">
                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <h1 className="glitch" data-text="Actualités">Actualités</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5 text-center text-md-left gallery">
                        <div className="col-12 col-md-9 mt-5">
                            <div id="scene" className="scene">

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
