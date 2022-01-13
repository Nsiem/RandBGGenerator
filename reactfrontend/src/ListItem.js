import React from "react";

export default class ListItem extends React.Component {
    render() {
        return (
            <div className="listItems">
                <a href={this.props.imglink}>
                    <li>{this.props.imglink} - {this.props.time}</li>
                </a>
            </div>
        )
    }
}
