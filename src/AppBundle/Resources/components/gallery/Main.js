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
            <section id="Gallery">
                <section className="p-absolute o-hidden wrapper-scene">
                    <section id="scene" className="scene">
                        <div className="img marche2" data-depth="0.6"></div>
                    </section>
                </section>
                <section className="container-fluid custom-scroll opacity-dark oy-auto p-relative wrapper-content gallery">
                    <div className="row">
                        <div className="col-12 mt-5 text-center">
                            <h1>Photographies</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-5 text-center text-md-left gallery">
                        <div className="col-12 col-md-9 mt-5">
                            <h3>L'ancien marché</h3>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/market.jpg" className="picture" data-lightbox={"market.jpg"}>
                                        <img src="../bundles/gallery/market.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/market2.jpg" className="picture" data-lightbox={"market.jpg"}>
                                        <img src="../bundles/gallery/market2.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/market3.jpg" className="picture" data-lightbox={"market.jpg"}>
                                        <img src="../bundles/gallery/market3.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 mt-5">
                            <h3>L'ancien marché aux bestiaux</h3>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/animals.jpg" className="picture" data-lightbox={"animals.jpg"}>
                                        <img src="../bundles/gallery/animals.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/animals2.jpg" className="picture" data-lightbox={"animals.jpg"}>
                                        <img src="../bundles/gallery/animals2.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 mt-5">
                            <h3>L'ancien abattoir</h3>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/slaughterhouse.jpg" className="picture" data-lightbox={"slaughterhouse.jpg"}>
                                        <img src="../bundles/gallery/slaughterhouse.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/slaughterhouse2.jpg" className="picture" data-lightbox={"slaughterhouse.jpg"}>
                                        <img src="../bundles/gallery/slaughterhouse2.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/slaughterhouse3.jpg" className="picture" data-lightbox={"slaughterhouse.jpg"}>
                                        <img src="../bundles/gallery/slaughterhouse3.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 mt-5">
                            <h3>La construction du marché</h3>
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/build.jpg" className="picture" data-lightbox={"build.jpg"}>
                                        <img src="../bundles/gallery/build.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/build2.jpg" className="picture" data-lightbox={"build.jpg"}>
                                        <img src="../bundles/gallery/build2.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/build3.jpg" className="picture" data-lightbox={"build.jpg"}>
                                        <img src="../bundles/gallery/build3.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/build4.jpg" className="picture" data-lightbox={"build.jpg"}>
                                        <img src="../bundles/gallery/build4.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-9 mt-5">
                            <h3>Le marché</h3>
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market2.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market2.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market3.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market3.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market4.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market4.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market5.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market5.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market6.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market6.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market7.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market7.jpg" />
                                    </a>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                    <a href="../bundles/gallery/new_market8.jpg" className="picture" data-lightbox={"new_market.jpg"}>
                                        <img src="../bundles/gallery/new_market8.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

module.exports = Main;
