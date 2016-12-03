import React from "react";
import {spring, Motion} from "react-motion";
import Header from "./header";
import $ from  "jquery";
import {Link} from "react-router";
import Home from  "../page-container/home";
export default class HomePage extends React.Component {
    constructor() {
        super()
        this.myPageOnload = this.myPageOnload.bind(this);
        this.loader = false;
        this.state = {
            LastNews: []
        }
    }


    componentDidMount() {
        setTimeout(()=> {
            this.loader ? this.refs.loadeBar.style.width = 100 + "%" : "";

        }, 2000)
        setTimeout(()=> {
            this.refs.loadeBar.style.width == 100 + "%" ? this.refs.loadeBar.style.display = "none" : '';
        }, 4000)
    }

    myPageOnload() {

        this.loader = true;
    }
    componentDidUpdate(){
        this.loader=true;

    }
    render() {
        return (
            <div onLoad={this.myPageOnload}>
                <div className="container">
                    <Header></Header>
                </div>
                <div className="loaderBar" ref="loadeBar"></div>
                {this.props.children || <Home/>}
            </div>

        )
    }

}
