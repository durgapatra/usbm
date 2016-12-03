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
                     <Link to="/home"> HOME</Link>
                </span>

                <SubMenu myLi={this.aboutMenu}>
                         <span id="headerSpanAbout" ref="about">
                             <Link to="the-institute">ABOUT USBM</Link>
                         </span>
                </SubMenu>

                <SubMenu myLi={this.courses}>
                     <span id="headerSpanCourses">
                         <Link to="courses">COURSES</Link>
                     </span>
                </SubMenu>

                <span id="headerSpanFaculty" className="headerItem">
                    <Link to="faculty">FACULTY</Link>
                </span>

                <SubMenu myLi={this.facilities}>
                    <span id="headerSpanFacilities" >
                        <Link to="computer-lab">FACILITIES</Link>
                    </span>
                </SubMenu>

                <SubMenu myLi={this.map}>
                    <span id="headerSpanMap">
                        <Link to="college-map">Map</Link>
                    </span>
                </SubMenu>

                <SubMenu myLi={this.others}>
                    <span id="headerSpanOther">
                        <Link to="admission">OTHERS</Link>
                    </span>
                </SubMenu>


                <span id="headerSpanContact" className="headerItem">
                   <Link to="contact-us">CONTACT US</Link>
                </span>

                <span id="headerSpanLogin" className="headerItem">
                    <Link to="login">Login</Link>
                </span>
            </div>
        )
    }

}

