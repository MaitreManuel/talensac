import React from "react";

class Header extends React.Component {
    componentDidMount() {
        var toggle_menu_elem = document.getElementById('toggle-menu'),
            home = document.getElementById('home'),
            history = document.getElementById('history'),
            gallery = document.getElementById('gallery'),
            actualities = document.getElementById('actualities'),
            shops = document.getElementById('shops');

        if(toggle_menu_elem && toggle_menu_elem !== null && toggle_menu_elem !== undefined) {
            toggle_menu_elem.addEventListener('click', () => {
                this.toggle_menu();
            });
        }

        if(home && home !== null && home !== undefined) {
            home.addEventListener('click', () => {
                localStorage.setItem('page', 'home');
                this.props.reload();
            });
        }
        if(history && history !== null && history !== undefined) {
            history.addEventListener('click', () => {
                localStorage.setItem('page', 'history');
                this.props.reload();
            });
        }
        if(gallery && gallery !== null && gallery !== undefined) {
            gallery.addEventListener('click', () => {
                localStorage.setItem('page', 'gallery');
                this.props.reload();
            });
        }
        if(actualities && actualities !== null && actualities !== undefined) {
            actualities.addEventListener('click', () => {
                localStorage.setItem('page', 'actualities');
                this.props.reload();
            });
        }
        if(shops && shops !== null && shops !== undefined) {
            shops.addEventListener('click', () => {
                localStorage.setItem('page', 'shops');
                this.props.reload();
            });
        }
    }

    toggle_menu(trigger) {
        var this_class = 'open',
            toggle = document.getElementById('toggle-menu');

        toggle.classList.toggle(this_class);

        if (toggle.classList.contains(this_class) && trigger === 'ort_chg') {
            toggle.classList.toggle(this_class);
        }
    }

    render() {
        return (
            <header id="Header" className="p-relative">
                <nav className="navbar navbar-expand-lg navbar-dark opacity-dark">
                    <button id="toggle-menu" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <a id="home" className="navbar-brand m-auto mr-lg-4" href="javascript:void(0)">TALENSAC</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li id="history" className="nav-item active">
                                <a className="nav-link fadein" href="javascript:void(0)">Histoire</a>
                            </li>
                            <li id="gallery" className="nav-item">
                                <a className="nav-link fadein" href="javascript:void(0)">Photographies</a>
                            </li>
                            <li id="actualities" className="nav-item">
                                <a className="nav-link fadein" href="javascript:void(0)">Actualités</a>
                            </li>
                            <li id="shops" className="nav-item">
                                <a className="nav-link fadein" href="javascript:void(0)">Commerces</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

module.exports = Header;
