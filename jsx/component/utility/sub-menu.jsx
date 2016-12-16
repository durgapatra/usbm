import React from "react";
import {Motion, spring} from "react-motion";

export default class SubMenu extends React.Component {
    constructor() {
        super()
        this.state = {
            hover:false
        }
    }

    handleMouseOver() {
        this.refs.findWidth.className="headerItem headerColorRed";
        this.state.hover = true;
        this.setState(this.state);
    }

    handleMouseOut() {
        setTimeout(()=>{
            this.refs.findWidth.className="headerItem"
            this.state.hover = false;
            this.setState(this.state);
        },100)

    }
    componentDidMount() {
        this.layer.style.width = this.refs.findWidth.offsetWidth + "px";
        this.triangleBox.style.marginLeft = this.refs.findWidth.offsetWidth / 3 + "px";
    }
    render() {
        return (
            <span className="menuContainer"
                        onMouseLeave={this.handleMouseOut.bind(this)}>

                <span style={{position:"relative"}} ref="findWidth" className="headerItem" style={{color:"white"}}
                   onMouseOver={this.handleMouseOver.bind(this)}
                >
                    {this.props.children}
                </span>
                
                <Motion
                    defaultStyle={{x: 0}}
                    style={{x:this.state.hover?spring(1,{stiffness: 120, damping: 14}):spring(0)}}
                >
                    {(styles)=> {

                        return <span style={{transform:`scale(${styles.x})`,opacity:styles.x}} >
                            <span className="layer" ref={(layer)=>this.layer=layer}></span>
                            <span className="triangleBox" ref={(triangleBox)=>this.triangleBox=triangleBox}/>
                            <span id="subMenu" ref={(subMenu)=>this.subMenu=subMenu}>
                                <ul>
                                    {this.props.myLi.map((e, i)=> {
                                        return <li onClick={this.handleMouseOut.bind(this)} key={i}   >{e}</li>
                                    })}
                                </ul>
                            </span>
                        </span>
                    }}
                </Motion>

            </span>

        )
    }

}
