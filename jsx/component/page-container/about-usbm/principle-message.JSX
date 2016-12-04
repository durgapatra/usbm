import React from "react";

export default class PrincipleMessage extends React.Component {
    constructor() {
        super()
        this.allText = "This is a technology-cum-knowledge century where people are technology-savvy, knowledgeable, anhave a relatively better understanding of the global issues than their predecessors. In the currentemerging, dynamic, and progressive environment, the management field is predicted to be highlyproactive, and automated. In the contemporary environment, strategic thinking and strategic actionscombined with administrative and operational efficiency have become indispensable. In this context,USBM was established to cater to the needs of the future managers and technocrats who will provideleadership to the society. Innovative teaching methodology, experienced faculty, a well-structuredindustry interface, a fully integrated contemporary campus- all contribute to"
        this.state = {
            editText: false
        }
    }

    getEdit() {
        this.state.editText = !this.state.editText;
        this.setState(this.state);
        this.state.editText ? "" : this.refs.textBox.readOnly = true;
    }

    getSave() {
        this.allText=this.refs.textBox.value;

    }
    render() {

        return (
            <div>
                <h1>Principle Message</h1>
                <img src="prinicpal2.jpg" alt=""/>
                <button className="EditSaveBtn" onClick={this.getEdit.bind(this)}>{this.state.editText ? "Save" : "EditText"}</button>

                    {this.state.editText ? <textarea
                        ref="textBox"
                        style={{width:"100%",height:"300px",
                  border: "2px solid whi",
                  borderRadius: "4px",
                 backgroundColor: "#f8f8f8",
                 fontSize:"16px",
                         resize:"none"}}
                        onMouseOut={this.getSave.bind(this)}
                        defaultValue={this.allText}
                    ></textarea> : <p>{this.allText}</p>}
                

            </div>
        )
    }

}
