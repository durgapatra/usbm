import React from "react";
import {Link} from "react-router";

export default class NewPage extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <h2>My new page </h2>
                <Link to="www.facebook.com">go to fb</Link>>
            </div>
        )
    }

}
