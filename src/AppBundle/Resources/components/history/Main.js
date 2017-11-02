import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var nav_item = document.getElementsByClassName('nav-item');

        for(var i = 0; i < nav_item.length; i++) {
            nav_item[i].classList.remove('active');
        }

        document.querySelector('#history').classList.add('active');
        localStorage.setItem('page', 'history');

        var scene = document.getElementById('scene'),
            // butcher = document.getElementById('butcher'),
            parallaxInstance = new Parallax(scene);
            // parallaxButcher = new Parallax(butcher);

        parallaxInstance.limit(30, 15);
        // parallaxButcher.limit(15, 7);
    }
    render() {
        return (
            <section id="History">
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene" style={{backgroundImage: `url(bundles/fond.jpg)`}}>
                        <div className="img background" style={{backgroundImage: `url(bundles/background.jpg)`}}data-depth="0.2"></div>
                        <div className="img marche" style={{backgroundImage: `url(bundles/marche.png)`}}data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid custom-scroll opacity-medium oy-auto p-relative wrapper-content">
                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <h1>Histoire</h1>
                        </div>
                    </div>
                    <div id="chapter-01" className="row justify-content-center">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <h1>Marché de Talensac</h1>
                            <p>
                                Le vendredi 8 janvier 1937, Auguste Pageot , député-maire de Nantes inaugurait le nouveau marché de Talensac.
                                Ce dernier prenait la place de l'ancien marché à la viande et de l'ancien marché aux bestiaux qui côtoyait l'abattoir
                                municipal installé en 1829 et transféré en 1933 à Pont-Rousseau.<br/>
                                Ce nouvel équipement avec ses 200 étals remplaçait aussi le marché couvert de Feltre et le marché en plein air de
                                Saint-Similien, il fut ouvert au public le samedi 9 janvier.
                            </p>
                        </div>
                    </div>
                    <div id="chapter-02" className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <h1>Marché de Talensac</h1>
                            <p>
                                Le vendredi 8 janvier 1937, Auguste Pageot , député-maire de Nantes inaugurait le nouveau marché de Talensac.
                                Ce dernier prenait la place de l'ancien marché à la viande et de l'ancien marché aux bestiaux qui côtoyait l'abattoir
                                municipal installé en 1829 et transféré en 1933 à Pont-Rousseau.<br/>
                                Ce nouvel équipement avec ses 200 étals remplaçait aussi le marché couvert de Feltre et le marché en plein air de
                                Saint-Similien, il fut ouvert au public le samedi 9 janvier.
                            </p>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div id="chapter-03" className="row justify-content-center">
                        <div className="col-4"></div>
                        <div className="col-12 col-md-6 col-lg-4 mt-5">
                            <h1>Marché de Talensac</h1>
                            <p>
                                Le vendredi 8 janvier 1937, Auguste Pageot , député-maire de Nantes inaugurait le nouveau marché de Talensac.
                                Ce dernier prenait la place de l'ancien marché à la viande et de l'ancien marché aux bestiaux qui côtoyait l'abattoir
                                municipal installé en 1829 et transféré en 1933 à Pont-Rousseau.<br/>
                                Ce nouvel équipement avec ses 200 étals remplaçait aussi le marché couvert de Feltre et le marché en plein air de
                                Saint-Similien, il fut ouvert au public le samedi 9 janvier.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
