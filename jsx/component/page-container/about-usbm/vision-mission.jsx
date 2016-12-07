import React from "react";

export default class VisionMission extends React.Component {
    constructor() {
        super()
        this.allText = "To contribute to the growth of the corporate sector and thus the society by producing a pool ofefficient human resources and by promoting innovation and excellence in managerialeducation."
        this.allText2 = "To foster talents so as to make them understand the global dimensions of business, gain professionalcompetencies through interpersonal skills, critical thinking, creativity, leadership abilities,research, and entrepreneurship in an environment which promotes core human values while creatingample opportunities for their growth and development."
        this.state = {
            editText: false,
            editText2: false
        }
    }

    getEdit() {
        this.state.editText = !this.state.editText;
        this.setState(this.state);
        this.state.editText ? "" : this.refs.textBox.readOnly = true;
    }

    getSave() {
        this.allText = this.refs.textBox.value;

    }

    getEdit2() {
        this.state.editText2 = !this.state.editText2;
        this.setState(this.state);
        this.state.editText2 ? "" : this.refs.textBox2.readOnly = true;
    }

    getSave2() {
        this.allText2 = this.refs.textBox2.value;

    }

    render() {
        return (
            <div style={{marginLeft:"10px"}}>
                <h1>Vision Mission</h1>
                <div className="facultyImgContainer">
                    <img src="vision_mission.jpg" className="facultyImg" alt=""/>

                    <div className="photoFacultyUpload">
                        <span><i className="fa fa-camera" aria-hidden="true"></i></span>
                        <input type="file" className="upload"/>
                        <span className="changePhotoSpan">Updata Photo</span>
                    </div>

                </div>

                <h2>Vision</h2>
                <div className="EditSaveBtnContainer">
                    <button className="EditSaveBtn"
                            onClick={this.getEdit.bind(this)}>{this.state.editText ? "Save" : "EditText"}</button>
                </div>
                {this.state.editText ? <textarea
                    ref="textBox"
                    style={{width:"1300px",height:"300px",
                  border: "2px solid whi",
                  borderRadius: "4px",
                 backgroundColor: "#f8f8f8",
                 fontSize:"16px",
                         resize:"none"}}
                    onMouseOut={this.getSave.bind(this)}
                    defaultValue={this.allText}
                ></textarea> : <p>{this.allText}</p>}
                <h2>Mission</h2>
                <div className="EditSaveBtnContainer">
                    <button className="EditSaveBtn"
                            onClick={this.getEdit2.bind(this)}>{this.state.editText2 ? "Save" : "EditText"}</button>
                </div>
                {this.state.editText2 ? <textarea
                    ref="textBox2"
                    style={{width:"100%",height:"300px",
                  border: "2px solid whi",
                  borderRadius: "4px",
                 backgroundColor: "#f8f8f8",
                 fontSize:"16px",
                         resize:"none"}}
                    onMouseOut={this.getSave2.bind(this)}
                    defaultValue={this.allText2}
                ></textarea> : <p>{this.allText2}</p>}

            </div>
        )
    }

}
