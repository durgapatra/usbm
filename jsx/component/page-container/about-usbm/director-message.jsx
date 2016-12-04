import React from "react";

export default class DirectorMessage extends React.Component {
    constructor() {
        super()
        this.allText = "India is undergoing a process of evolution both socially and economically. Rapid globalization andcompetitive markets make it imperative to align management education, to effectively meet thedynamics of the corporate challenges. With the growing awareness about the complexity of modernbusiness; the demand for management students, with a high level of domain knowledge and corecompetencies is fast increasing. In this mind extension era, students should be fully equipped tolay the foundation of a new beginning. Efficient human resources have always been the strength ofthe evolving India where ideas and dreams have consistently contributed to the exploration of theunexplored. USBM, a flourishing centre of excellence in management and technical education, providesthe platform for the realisation of dreams. Here, we believe in efficiency, quality, and creativity.USBM invites those aspiring minds who dream it big and want to leave their marks for the futuregenerations."
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
                <h1>Director Message</h1>
                <img src="director.jpg" alt=""/>
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
