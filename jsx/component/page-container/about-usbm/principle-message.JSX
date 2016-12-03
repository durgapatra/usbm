import React from "react";

export default class PrincipleMessage extends React.Component {
    constructor() {
        super()
        this.state = {
            allText:[],
            editText: false
        }
    }

    getEdit() {
        this.state.editText = true;
        this.setState(this.state);
    }
    getSave(){
        this.state.allText.push(this.refs.inpValue.value);

        this.setState(this.state);
    }
    componentDidMount(){
        
    }
    render() {

        return (
            <div>
                <h1>Principle Message</h1>
                <img src="prinicpal2.jpg" alt=""/>
                <p>  This is a technology-cum-knowledge century where people are technology-savvy, knowledgeable, and
                    have a relatively better understanding of the global issues than their predecessors. In the current
                    emerging, dynamic, and progressive environment, the management field is predicted to be highly
                    proactive, and automated. In the contemporary environment, strategic thinking and strategic actions
                    combined with administrative and operational efficiency have become indispensable. In this context,
                    USBM was established to cater to the needs of the future managers and technocrats who will provide
                    leadership to the society. Innovative teaching methodology, experienced faculty, a well-structured
                    industry interface, a fully integrated contemporary campus- all contribute to</p>

            </div>
        )
    }

}
