import React from "react";
import Parallax from 'parallax-js';

class Main extends React.Component {
    componentDidMount() {
        var scene = document.getElementById('scene'),
            butcher = document.getElementById('butcher'),
            parallaxInstance = new Parallax(scene),
            parallaxButcher = new Parallax(butcher);

        parallaxInstance.limit(30, 15);
        parallaxButcher.limit(15, 7);
    }
    render() {
        return (
            <section id="History">
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene">
                        <div className="img background" data-depth="0.2"></div>
                        <div className="img marche" data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid p-relative opacity-medium wrapper-content">
                    <div className="row justify-content-center">
                        <div className="col-4 d-none d-md-block mt-5">
                            <section id="butcher" className="scene">
                                <div className="text-center" data-depth="0.6">
                                    <img src="/bundles/boucher.png" alt=""/>
                                    <p>Boucher de l'ancien abattoir</p>
                                </div>
                            </section>
                        </div>
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
