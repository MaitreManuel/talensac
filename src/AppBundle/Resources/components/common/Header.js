import React from "react";

class Header extends React.Component {
    componentDidMount() {
        var toggle_menu_elem = document.getElementById('toggle-menu');

        window.addEventListener('orientationchange', () => {
            this.toggle_menu('ort_chg');
        });

        if(toggle_menu_elem && toggle_menu_elem !== null && toggle_menu_elem !== undefined) {
            toggle_menu_elem.addEventListener('click', () => {
                this.toggle_menu();
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
                    <a className="navbar-brand m-auto mr-lg-4" href="">TALENSAC</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link fadein" href="">Histoire</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fadein" href="">Photographies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fadein" href="">Actualités</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fadein" href="">Commerces</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

module.exports = Header;
