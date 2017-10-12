import React from "react";
import { spring, Motion } from "react-motion";
import Header from "./header";
import $ from "jquery";
import { Link } from "react-router";
import Home from "../page-container/home";
export default class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            LastNews: []
        }
    }



    render() {
        console.log(window.innerWidth);
        return (
            <div>
                <Header></Header>
                <div className={window.innerWidth < 1400 ? "container-fluid" : "container"}>
                    {this.props.children || <Home />}
                </div>
            </div>

        )
    }

}
