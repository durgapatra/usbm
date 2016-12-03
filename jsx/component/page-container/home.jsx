import React from "react";
import $ from  "jquery";
export default class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            changePhoto:false,
            countNo: 0,
            profilePhotos: [
                {dp: true},
                {dp: false},
                {dp: false},
                {dp: false}
            ]
        }

    }

    profileDOt(index) {
        for (var i = 0; i < this.state.profilePhotos.length; i++) {
            this.state.profilePhotos[i] = {dp: false};
        }
        this.state.profilePhotos[index] = {dp: true};
        this.setState(this.state);
        this.state.countNo = index;
    }

    componentDidMount() {
        this.fuse = setInterval(()=> {
            this.profileDOt(this.state.countNo);
            if (this.state.countNo < this.state.profilePhotos.length - 1) {
                this.state.countNo++;
            } else
                this.state.countNo = 0
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.fuse);
    }

    leftProfileImg(index) {
        if (index == 0) {
            this.profileDOt(this.state.profilePhotos.length - 1);
        } else {
            this.profileDOt(index - 1);
        }
        this.setState(this.state)
    }

    rightProfileImg(index) {
        if (index == this.state.profilePhotos.length - 1) {
            this.profileDOt(0);
        } else {
            this.profileDOt(index + 1);
        }
        this.setState(this.state)
    }
    mouseOver(){
        this.state.changePhoto=true
    }
    mouseLeave(){
        this.state.changePhoto=true
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
        /*
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

         }*/

    }

    render() {
        console.log(this.state.changePhoto)
        var myPhoto = this.state.profilePhotos.map((e, i)=> {
            return (
                <img src={"uploads/"+i+".jpg"}
                     key={i}
                     style={e.dp?{display:"block"}:null }
                     className="coverImg" alt=""/>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="profilePhotoContainer">
                        <div className="sideBox"></div>
                        <div style={{position:"absolute",zIndex:100,marginTop:300,marginLeft:45+"%"}}>
                            {this.state.profilePhotos.map((e, i)=> {
                                return <span key={i} className="dpDot" style={e.dp?{background:"black"}:{}}
                                             onClick={this.profileDOt.bind(this,i)} aria-hidden="true">{i + 1}</span>
                            })}
                        </div>
                        <span>
                              <i className="fa fa-chevron-circle-left  leftProfileBtn fa-4x"
                                 onClick={this.leftProfileImg.bind(this,this.state.countNo)} aria-hidden="true"></i>
                        </span>
                        {myPhoto}
                        <span>
                             <i className="fa fa-chevron-circle-right rightProfileBtn fa-4x"
                                onClick={this.rightProfileImg.bind(this,this.state.countNo)}
                                aria-hidden="true"></i>
                        </span>
                        <div className="sideBox"></div>
                        <div className="fileUpload">
                            <span><i className="fa fa-camera" aria-hidden="true"></i></span>
                            <input type="file" className="upload" />
                            <span className="changeCoverPhotoSpan">Updata Couer Photo</span>
                        </div>
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
            </div>)
    }

}
