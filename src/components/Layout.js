import React, { Component } from "react";

class Layout extends Component {
    state = {
        
    }

    render() {
        return (
            <div className="forms">
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default Layout;