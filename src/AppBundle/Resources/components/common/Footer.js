var React = require("react");

class Footer extends React.Component {
    render() {
        return (
            <footer id="Footer" className="container-fluid p-relative opacity-dark">
                <div className="row">
                    <div className="col-12 text-center">
                        <span><i className="fa fa-copyright" aria-hidden="true"></i> 2017 - Trystan Eveno</span>
                    </div>
                </div>
            </footer>
        );
    }
}

module.exports = Footer;
