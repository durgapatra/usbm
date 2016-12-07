import React from "react";
import SubMenu from "../utility/sub-menu"
import {Link} from "react-router"

export default class Header extends React.Component {
    constructor() {
        super()
        this.strate = {}
        this.aboutMenu = [
            <Link to="the-institute">The institute</Link>,
            <Link to="vision-mission">Vision mission</Link>,
            <Link to="director-message">Director Message</Link>,
            <Link to="principle-message">Principal'S Message</Link>
        ]
        this.courses = [<Link to="mba">MBA</Link>,
            <Link to="mca">MCA</Link>,
            <Link to="mca-le">MCA-LE</Link>
        ]
        this.facilities = [
            <Link to="computer-lab">Computer Lab</Link>,
            <Link to="library">Library</Link>,
            <Link to="language-lab">Language Lab</Link>,
            <Link to="classes">classes</Link>,
            <Link to="wifi-campus">Wifi Campus</Link>,
            <Link to="hostels">Hostels</Link>,
            <Link to="canteen">Canteen</Link>
        ]
        this.map = [
            <Link to="college-map">College Map</Link>,
            <Link to="sitemap">Sitemap</Link>
        ]
        this.others = [
            <Link to="admission">Admission</Link>,
            <Link to="news">News</Link>,
            <Link to="events">Events</Link>,
            <Link to="placement">Placement</Link>,
            <Link to="photo-gallery">Photo Gallery</Link>,
            <Link to="scholarship">Scholarship</Link>,
            <Link to="career">Career</Link>
        ]
    }

    render() {
        return (
            <div className="header">
                     <span>
                     <img src="\uploads\logo.jpeg" id="logo" alt=""/>
                 </span>
                <span id="clg-name" className="clg-name-3d">
                     UNITED SCHOOL OF BUSINESS MANAGEMENT
                </span>
                <span id="headerSpanHome" className="headerItem">
                     <Link className="my_a" to="/home"> HOME</Link>
                </span>

                <SubMenu myLi={this.aboutMenu} >
                         <span id="headerSpanAbout" ref="about" className="my_a">
                          ABOUT USBM
                         </span>
                </SubMenu>

                <SubMenu myLi={this.courses}>
                     <span id="headerSpanCourses" className="my_a">
                        COURSES
                     </span>
                </SubMenu>

                <span id="headerSpanFaculty" className="headerItem">
                    <Link className="my_a" to="faculty">FACULTY</Link>
                </span>

                <SubMenu myLi={this.facilities}>
                    <span id="headerSpanFacilities" className="my_a">
                        FACILITIES
                    </span>
                </SubMenu>

                <SubMenu myLi={this.map}>
                    <span id="headerSpanMap" className="my_a">
                       Map
                    </span>
                </SubMenu>

                <SubMenu myLi={this.others} className="my_a">
                    <span id="headerSpanOther" className="my_a">
                       OTHERS
                    </span>
                </SubMenu>


                <span id="headerSpanContact" className="headerItem">
                   <Link className="my_a" to="contact-us">CONTACT US</Link>
                </span>

                <span id="headerSpanLogin" className="headerItem">
                    <Link className="my_a" to="login">Login</Link>
                </span>
            </div>
        )
    }

}

