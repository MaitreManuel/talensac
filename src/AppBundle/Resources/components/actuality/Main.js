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
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene" style={{backgroundImage: `url(bundles/fond.jpg)`}}>
                        <div className="img marche2" style={{backgroundImage: `url(bundles/marche2.png)`}} data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid custom-scroll opacity-medium oy-auto p-relative wrapper-content">
                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <h1 className="glitch" data-text="Actualités">Actualités</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5 text-center text-md-left">
                        <div className="col-12 col-lg-11 mt-5">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Ouverture du marché le mardi 15 août!</h5>
                                        </div>
                                        <div className="text">
                                            <p>Comme tous les jours fériés, le marché de Talensac a le plaisir de vous accueillir ce mardi 15 août 2016 dès 7h!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Ouverture du Marché de Talensac le vendredi 14 juillet 2017</h5>
                                        </div>
                                        <div className="text">
                                            <p>Les commerçants du marché de Talensac seront heureux de vous accueillir vendredi 14 Juillet de 7h à 13h30!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Ouverture du marché lundi de Pentecôte</h5>
                                        </div>
                                        <div className="text">
                                            <p>Votre marché de Talensac ouvre ses portes le lundi de Pentecôte, lundi 4 juin! Vous commerçants vous accueilleront de 7h à 13h. A très bientôt !</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Ouverture du Marché le jeudi de l'Ascension</h5>
                                        </div>
                                        <div className="text">
                                            <p>Les commerçants du Marché de Talensac sont heureux de vous accueillir le jeudi 25 mai de l'Ascencion de 7h à 13h!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Ouverture du Marché de Talensac le Lundi 8 mai 2017</h5>
                                        </div>
                                        <div className="text">
                                            <p>Votre marché de Talensac est ouvert ce lundi 8 mai comme tous les jour féries! Vos commerçants préférés vous accueillerons de 7h à 13h! Soyez les bienvenus!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Lundi 1er mai : ouverture du marché de Talensac</h5>
                                        </div>
                                        <div className="text">
                                            <p>Le marché de Talensac sera ouvert, comme tous les jours fériés, le lundi 1er mai. Les commerçants seront heureux de vous accueillir de 7h à 13h. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Lundi de Pâques : ouverture du marché de 7h à 13h!</h5>
                                        </div>
                                        <div className="text">
                                            <p>Votre marché de Talensac est ouvert comme tous les lundi de Pâques! Soyez les bienvenus!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 mt-4">
                                    <div className="section">
                                        <div className="title">
                                            <h5>Le Père Noël de passage au Marché de Talensac!</h5>
                                        </div>
                                        <div className="text">
                                            <p>Comme tous les ans, le "Père Noël" sera présent au marché de Talensac quelques jours avant Noël : samedi 17, dimanche 18 et mercredi 21 décembre!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-5">
                            <div className="text-center">
                                <a href="http://www.marche-talensac.fr/actualites.php" className="btn btn-dark" target="_blank">Plus d'actualitiés</a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
