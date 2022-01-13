import React from "react";
import axios from "axios";

export default class Banner extends React.Component {

  isClicked() {
    axios.get("http://localhost:5000/").then(resp => {
      document.getElementById("imgView").src = resp.data
    })
  }

  render() {
    return (
      <div className="theBanner">
        <div id="searchdiv">
          <input type="text" id="header-search" placeholder="Enter tags related to BG you want" maxLength={"100"}/>
        </div>
        <div>
          <button id="searchbutton" type="button" onClick={this.isClicked}>Search</button>
        </div>          
      </div>
    )
  }
}
