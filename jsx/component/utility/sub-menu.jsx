import React from "react";
import {Motion, spring} from "react-motion";

export default class SubMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            hover: false
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
    componentDidMount() {
        this.subMenu.style.width = this.refs.findWidth.offsetWidth + "px";
        this.triangleBox.style.marginLeft = this.refs.findWidth.offsetWidth / 2 - 10 + "px";
    }
    render() {
        return (
            <b className="menuContainer" id="menuContainer"
                        onMouseLeave={this.handleMouseOut.bind(this)}>
                <b style={{position:"relative"}} ref="findWidth"
                   onMouseOver={this.handleMouseOver.bind(this)}
                >
                    {this.props.children}
                </b>
                <Motion
                    defaultStyle={{x: 0}}
                    style={{x:this.state.hover?spring(1,{stiffness: 180, damping: 12}):spring(0)}}
                >
                    {(styles)=> {

                        return <b style={{transform:`scale(${styles.x})`,opacity:styles.x}} >
                            <b className="triangleBox" ref={(triangleBox)=>this.triangleBox=triangleBox}/>
                            <b id="subMenu" ref={(subMenu)=>this.subMenu=subMenu}>
                                <ul>
                                    {this.props.myLi.map((e, i)=> {
                                        return <li onClick={this.handleMouseOut.bind(this)} key={i} >{e}</li>
                                    })}
                                </ul>
                            </b>
                        </b>
                    }}
                </Motion>

            </b>

        )
    }

}
