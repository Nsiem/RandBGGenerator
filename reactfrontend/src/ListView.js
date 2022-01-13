import React from "react";
import axios from "axios";

export default class ListView extends React.Component {
    constructor(props) {
        super(props)
        //axios get list items json, then load each into listitem and display
    }

    render() {
        return (
            <div id="listholder">
                
            </div>
        )
    }
}
