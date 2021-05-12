import React, {Component} from 'react'
import ButtonClass from "./ButtonClass"
import {MyContext} from "./AppClass";

export default class ProductCounterClass extends Component {

    render() {
        return (
            <MyContext.Consumer>
                {
                    cnt => {
                        return (
                            <div>
                                <ButtonClass
                                    id={this.props.id}
                                    actionFunction={cnt.increaseHandle}
                                    name="+1"
                                />
                                <span>{this.props.counter}</span>
                                <ButtonClass
                                    id={this.props.id}
                                    actionFunction={cnt.decreaseHandle}
                                    name="-1"
                                    disabled={!this.props.counter}
                                />
                            </div>
                        )
                    }
                }
            </MyContext.Consumer>
        )
    }
}