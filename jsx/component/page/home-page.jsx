import React from "react";
import {spring, Motion} from "react-motion";
import Header from "./header";
import $ from  "jquery";
import {Link} from "react-router";
export default class HomePage extends React.Component {
    constructor() {
        super()
        this.myPageOnload = this.myPageOnload.bind(this);
        this.loader = false;
        this.state = {
            LastNews: []
        }
    }

    handleProfile(e) {
        /*  e.preventDefault();
         var file = e.target.files[0];
         $.ajax({
         url: "profile-upload",
         type: "GET",
         data:file ,
         processData:false,
         contentType:false,
         success: function (msg) {
         console.log(msg)
         },
         crossDomain:true
         });*/

        $.ajax({
            url: "durga",
            type: "POST",
            data: ""
        }).done((data)=> {
            console.log(data)
        })
    }

    cournce(number) {
        var myLenght = number.toString().length;
        console.log(myLenght)
        if (myLenght == 5) {

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

    myPageOnload(e) {
        console.log(e)
        this.loader = true;
    }

    render() {
        return (
            <div onLoad={this.myPageOnload}>
                <div className="container">
                    <Header></Header>
                </div>
                <div className="loaderBar" ref="loadeBar"></div>
                <div className="container">
                    <div className="profilePhotoContainer">
                        <div className="sideBox"></div>
                        <img src="uploads/banner.jpg" className="coverImg" alt="United School of Business Management"/>
                        <div className="sideBox"></div>
                        <input type="file" name="profilePhoto" onChange={this.handleProfile.bind(this)}
                               className="setProfileBtn"/>
                        <img src="" alt=""/>
                    </div>
                </div>
                <div className="writeSUB">
                </div>
                <div className="container">
                    <div className="body-container">
                        <h1>USBM AT A GLANCE</h1>
                        <p className="float_left  " style={{display:"block"}}>
                            <img className="float_left" src="\uploads\collage-images.jpg" alt=""/>
                            United School of Business Management (USBM) is conveniently located in
                            the heart of Bhubaneswar, the capital city of Orissa which is blended
                            with ancient and modern Indian culture. USBM is established with an
                            initiative and support from some of the leading academicians,
                            industrialists and business houses. Within a short span, it has
                            revolutionised the concept of professional MBA &amp; MCA training.
                            It has ceaselessly been pursuing and traversing new areas of excellence
                            in academics with an enviable success rate in the state as well as in
                            the country. USBM is approved by All India Council for Technical
                            Education (AICTE), Ministry of HRD, Govt. of India and is affiliated
                            to Biju Patnaik University of Technology (BPUT), Govt, of Orissa.
                        </p>
                        <div>
                            <h1 className="float_right">Our Pride</h1>
                            <div className="ourPride">
                            </div>
                        </div>
                    </div>
                    <div className="homePageFuture"></div>
                </div>
            </div>

        )
    }

}
