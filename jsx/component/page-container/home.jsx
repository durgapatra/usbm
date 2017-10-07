import React from "react";
import $ from "jquery";
import {
    Carousel,
    Well

} from 'react-bootstrap';
export default class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0,
            direction: "next"
        }

    }


    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {

        return (
            <div>
                <Carousel interval={100} activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
                    <Carousel.Item>
                        <img width={1554} height={500} alt="900x500" src="uploads/0.jpg" />
                        {/*......uploding a new image ...........  */}
                        {/* <div className="fileUpload">
                            <span><i className="fa fa-camera" aria-hidden="true"></i></span>
                            <input type="file" className="upload" />
                            <span className="changeCoverPhotoSpan">Updata Cover Photo</span>
                        </div> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" width={1554} height={500} src="uploads/1.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" width={1554} height={500} src="uploads/2.jpg" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="900x500" width={1554} height={500} src="uploads/3.jpg" />
                    </Carousel.Item>
                </Carousel>
                <div >
                    <Well style={{ background: "#11a640", color: "#ffffff", fontSize: "10px" }}>
                        create by  DURGA PRASAD PATRA
            </Well>
                </div>
                <div className="container">
                    <div className="usbmAtGlanceBox">
                        <h1>USBM AT A GLANCE</h1>

                        <div className="usbmAtGlance">
                            <p>
                                <img className="float_left" src="\uploads\collage-images.jpg" alt="" />
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

                        </div>

                    </div>
                    <div className="ourPrideBox">
                        <h1>Our Pride</h1>
                        <div className="ourPride"></div>
                    </div>
                    <div className="ourPrideBox">

                    </div>
                </div>

                <div className="homePageFuture">

                </div>
            </div>)
    }

}
