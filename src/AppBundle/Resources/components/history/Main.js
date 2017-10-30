import React from "react";
import Parallax from 'parallax-js';

class Root extends React.Component {
    componentDidMount() {
        var scene = document.getElementById('scene'),
            parallaxInstance = new Parallax(scene);

        parallaxInstance.limit(30, 15);
    }
    render() {
        return (
            <section id="History">
                <div id="scene" className="scene">
                    <div className="img background" data-depth="0.2"></div>
                    <div className="img marche" data-depth="0.6"></div>
                </div>
            </section>
        );
    }
}

module.exports = Root;
