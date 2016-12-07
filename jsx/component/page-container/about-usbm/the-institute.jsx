import React from "react";

export default class TheInstitute extends React.Component {
    constructor() {
        super()
        this.allText = "United School of Business Management (USBM) is conveniently located in the heart of Bhubaneswar, thecapital city of Orissa which is blended with ancient and modern Indian culture. USBM is establishedwithan initiative and support from some of the leading academicians, industrialists and business houses.Within a short span it has revolutionised the concept of professional MBA &amp; MCA training. It haceaselessly been pursuing and traversing new areas&nbsp;of excellence in academics with an enviablesuccess rate in the state as well as in the country. USBM is approved by All India Council for Technical Education (AICTE), Ministry of HRD, Govt. ofIndia and is affiliated to Biju Patnaik University of Technology (BPUT), Govt, of Odisha."
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
        this.allText = this.refs.textBox.value;

    }

    render() {
        return (
            <div style={{marginLeft:"10px"}}>
                <h1>The Institute</h1>
                <div className="facultyImgContainer">
                    <img src="college_campus3.jpg" className="facultyImg" alt=""/>

                    <div className="photoFacultyUpload">
                        <span><i className="fa fa-camera" aria-hidden="true"></i></span>
                        <input type="file" className="upload"/>
                        <span className="changePhotoSpan">Updata Photo</span>
                    </div>
                </div>
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

            </div>
        )
    }

}
