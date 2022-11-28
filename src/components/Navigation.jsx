import React from "react";
import App from "../my-app/src/App";
class Header extends React.Component {
    render() {
        return <div>
            Javier {this.props.name}
        </div>;
    }
}
App.render(<Header name="Javier Contreras" />);