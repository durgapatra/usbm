import React from "react";
import {spring, Motion} from "react-motion";

export default class MyTooltip extends React.Component {
    constructor() {
        super()
        this.state = {
            hover:false
        }
    }

    handleMouseOver() {
        this.state.hover = true;
        this.setState(this.state);
    }

    handleMouseOut() {
        this.state.hover = false;
        this.setState(this.state);
    }

    onRest() {

    }

    render() {
        return (
            <span style={{position:"relative"}}>
                <span
                    onMouseOver={this.handleMouseOver.bind(this)}
                    onMouseOut={this.handleMouseOut.bind(this)}
                >
                    {this.props.children}
                </span>

               <Motion
                   defaultStyle={{x: 0}}
                   style={{x:this.state.hover?spring(1):spring(0)}}
                   onRest={this.onRest.bind(this)}
               >
                   {(styles)=> {
                       return (
                           <span  style={{transform:`scale(${styles.x})`,opacity:styles.x}}>
                                <span className="triangleBox"></span>
                               <span className="tooltipbox"
                                    ref={(findWidth)=>this._findWidth=findWidth}
                               >
                                {this.props.myTipMsg}
                               </span>
                           </span>
                       )
                   }}
                </Motion>
            </span>

        )

    }
}