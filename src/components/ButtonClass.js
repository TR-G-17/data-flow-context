import React, {Component} from "react";

export default class ButtonClass extends Component {

    render() {
        return (
            <button
                disabled={this.props.disabled}
                onClick={() => {
                    this.props.actionFunction(this.props.id)
                }
                }>{this.props.name}</button>
        )
    }
}