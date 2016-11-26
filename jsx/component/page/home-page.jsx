import React from "react";
import {spring, Motion} from "react-motion";
import Header from "./header";
import $ from  "jquery";
import {Link} from "react-router";
export default class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            LastNews: ["durga", "manoj", "manas"]
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

    myPageOnload() {

    }

    render() {
        return (
            <div onLoad={this.myPageOnload()}>

                <div className="homePage">
                    <div className="header_logo_container">
                        <Header></Header>
                    </div>
                    <div className="profilePhotoContainer">
                        <div className="loaderBar"></div>
                        <img id="logo" src="logo.png" alt="United School of Business Management"/>
                        <input type="file" name="profilePhoto" onChange={this.handleProfile.bind(this)}
                               className="setProfileBtn"/>
                        <img src="" alt=""/>
                    </div>
                    <div className="writeSUB">
                    </div>
                    <div className="container">
                        <h1>USBM AT A GLANCE</h1>
                        <p className="float_left  " style={{display:"block"}}>
                            <img className="float_left" src="\uploads\collage-images.jpg" alt=""/>
                            United School of Business Management (USBM) is conveniently located
                            in the heart of Bhubaneswar, the capital city of Orissa which is
                            blended with ancient and modern Indian culture. USBM is established
                            with an initiative and support from some of the leading academicians,
                            industrialists and business houses. Within a short span, it has
                            revolutionised the concept of professional MBA &amp; MCA training.
                            It has ceaselessly been pursuing and traversing new areas of excellence
                            in academics with an enviable success rate in the state as well as in
                            the country. USBM is approved by All India Council for Technical Education
                            (AICTE), Ministry of HRD, Govt. of India and is affiliated to Biju Patnaik University
                            of Technology (BPUT), Govt, of Orissa.
                        </p>
                        <div>
                            <h1 className="float_right">Our Pride</h1>
                            <div className="ourPride">
                                <ul>
                                    <Motion
                                        defaultStyle={{x:0}}
                                        style={{x:spring(1)}}
                                    >
                                        {(styles)=> {
                                            return <ul className="new" style={{marginBottom:styles.x*355}}>
                                                {this.state.LastNews.map((e, i)=> {
                                                    return <li key={i}>{e}</li>
                                                })}
                                            </ul>
                                        }}

                                    </Motion>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="homePageFuture"></div>
            </div>

        )
    }

}
