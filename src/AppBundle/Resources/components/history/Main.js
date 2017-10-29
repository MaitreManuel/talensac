import React from "react";
import Parallax from 'parallax-js';

class Root extends React.Component {
    componentDidMount() {
        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(20, 0);
    }
    render() {
        return (
            <section id="History">
                <div id="scene" className="scene">
                    <div data-depth="0.6"><img src="/bundles/marche.jpg" alt=""/></div>
                    {/* <div data-depth="0.2"><img src="/bundles/prehaut.png" alt=""/></div> */}
                </div>
            </section>
        );
    }
}

module.exports = Root;
