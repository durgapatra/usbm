import React from "react";
import SubMenu from "../utility/sub-menu"
import { Link, browserHistory } from "react-router"
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid
} from 'react-bootstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }
    selectMenuItem(e) {
        browserHistory.push(e)
    }
    render() {
        return (
            <Navbar style={{ background: "#11a640", color: "#ffffff", margin: 0 }} fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand >
                        <a href="/" className="clg-name-3d" style={{ color: "#ffffff" }}> UNITED SCHOOL OF BUSINESS MANAGEMENT</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse >
                    <Nav style={{}}>
                        {/*..........HEME MENU..............  */}
                        <NavItem eventKey={1} id="noMenu" onSelect={this.selectMenuItem.bind(this, "/")} ><Link style={{ color: "#ffffff" }} to="/">HOME</Link></NavItem>
                        {/*..........ABOUT USBM..............  */}
                        <NavDropdown eventKey={2} title="ABOUT USBM" id="basic-nav-dropdown1">
                            <MenuItem eventKey={2.1} onSelect={this.selectMenuItem.bind(this, "/the-institute")}> <Link to="the-institute">The institute</Link></MenuItem>
                            <MenuItem eventKey={2.2} onSelect={this.selectMenuItem.bind(this, "/vision-mission")}><Link to="vision-mission">Vision mission</Link></MenuItem>
                            <MenuItem eventKey={2.3} onSelect={this.selectMenuItem.bind(this, "/director-message")}> <Link to="director-message">Director Message</Link></MenuItem>
                            <MenuItem eventKey={2.4} onSelect={this.selectMenuItem.bind(this, "/principle-message")}>  <Link to="principle-message">Principal'S Message</Link></MenuItem>
                        </NavDropdown>
                        {/*........COURSES............  */}
                        <NavDropdown eventKey={3} title="COURSES" id="basic-nav-dropdown2">
                            <MenuItem eventKey={3.1} onSelect={this.selectMenuItem.bind(this, "/mba")}><Link to="mba">MBA</Link></MenuItem>
                            <MenuItem eventKey={3.2} onSelect={this.selectMenuItem.bind(this, "/mca")}> <Link to="mca">MCA</Link></MenuItem>
                            <MenuItem eventKey={3.3} onSelect={this.selectMenuItem.bind(this, "/mca-le")}><Link to="mca-le">MCA-LE</Link></MenuItem>
                        </NavDropdown>
                        {/*..........FACULTY..............  */}
                        <NavItem id="noMenu" eventKey={4} onSelect={this.selectMenuItem.bind(this, "/faculty")}>  <Link style={{ color: "#ffffff" }} to="faculty">FACULTY</Link></NavItem>
                        {/*............FACILITIES...............  */}
                        <NavDropdown eventKey={5} title="FACILITIES" id="basic-nav-dropdown3">
                            <MenuItem eventKey={5.1} onSelect={this.selectMenuItem.bind(this, "/computer-lab")}><Link to="computer-lab">Computer Lab</Link></MenuItem>
                            <MenuItem eventKey={5.2} onSelect={this.selectMenuItem.bind(this, "/library")}> <Link to="library">Library</Link></MenuItem>
                            <MenuItem eventKey={5.3} onSelect={this.selectMenuItem.bind(this, "/language-lab")}><Link to="language-lab">Language Lab</Link></MenuItem>
                            <MenuItem eventKey={5.4} onSelect={this.selectMenuItem.bind(this, "/classes")}><Link to="classes">classes</Link></MenuItem>
                            <MenuItem eventKey={5.5} onSelect={this.selectMenuItem.bind(this, "/wifi-campus")}><Link to="wifi-campus">Wifi Campus</Link></MenuItem>
                            <MenuItem eventKey={5.6} onSelect={this.selectMenuItem.bind(this, "/hostels")}> <Link to="hostels">Hostels</Link></MenuItem>
                            <MenuItem eventKey={5.7} onSelect={this.selectMenuItem.bind(this, "/canteen")}><Link to="canteen">Canteen</Link></MenuItem>
                        </NavDropdown>
                        {/*......... MAP...........  */}
                        <NavDropdown eventKey={6} title="MAP" id="basic-nav-dropdown4">
                            <MenuItem eventKey={6.1} onSelect={this.selectMenuItem.bind(this, "/college-map")}> <Link to="college-map">College Map</Link></MenuItem>
                            <MenuItem eventKey={6.2} onSelect={this.selectMenuItem.bind(this, "/sitemap")}><Link to="sitemap">Sitemap</Link></MenuItem>
                        </NavDropdown>
                        {/*............OTHERS..............  */}
                        <NavDropdown eventKey={7} title="OTHERS" id="basic-nav-dropdown5">
                            <MenuItem eventKey={7.1} onSelect={this.selectMenuItem.bind(this, "/admission")}><Link to="admission">Admission</Link></MenuItem>
                            <MenuItem eventKey={7.2} onSelect={this.selectMenuItem.bind(this, "/news")}> <Link to="news">News</Link></MenuItem>
                            <MenuItem eventKey={7.3} onSelect={this.selectMenuItem.bind(this, "/events")}><Link to="events">Events</Link></MenuItem>
                            <MenuItem eventKey={7.4} onSelect={this.selectMenuItem.bind(this, "/placement")}> <Link to="placement">Placement</Link></MenuItem>
                            <MenuItem eventKey={7.5} onSelect={this.selectMenuItem.bind(this, "/photo-gallery")}><Link to="photo-gallery">Photo Gallery</Link></MenuItem>
                            <MenuItem eventKey={7.6} onSelect={this.selectMenuItem.bind(this, "/scholarship")}><Link to="scholarship">Scholarship</Link></MenuItem>
                            <MenuItem eventKey={7.7} onSelect={this.selectMenuItem.bind(this, "/career")}>  <Link to="career">Career</Link></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={7.8} onSelect={this.selectMenuItem.bind(this, "/login")}> <Link to="/login">LOGIN</Link></MenuItem>
                        </NavDropdown>
                        {/*.............CONTACT US................  */}
                        <NavItem id="noMenu" eventKey={8} onSelect={this.selectMenuItem.bind(this, "/contact-us")}>  <Link style={{ color: "#ffffff" }} to="/contact-us">CONTACT US</Link></NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

