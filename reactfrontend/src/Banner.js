import React from "react";
import { render } from "react-dom";

export default class Banner extends React.Component {
  isClicked() {
    console.log("it was clicked!")
    document.getElementById("label1").innerText = "Hello 2!"
  }

  render() {
    return (
      <div className="theBanner">
        <form action="/" method="get">
            <label id="label1">hello</label>
            
            <input
              type="text"
              id="header-search"
              placeholder="Image Topic"
              name="s" 
            />
            <button id="searchbutton" type="button" onClick={this.isClicked}>Search</button>
          </form>
          
      </div>
    )
  }
}
