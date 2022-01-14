import React from "react";
import axios from "axios";

export default class Banner extends React.Component {

  isClicked() {
    if (document.getElementById('header-search').value === ""){document.getElementById('errorlabel').innerText = "Please enter a tag"; document.getElementById('errorlabel').style.visibility = "visible"; return}
    axios.get(`http://localhost:5000/wallpaper/${document.getElementById('header-search').value}`).then(resp => {
      if(resp.data === "0") {
        document.getElementById('errorlabel').style.visibility = "hidden"
        document.getElementById('imgView').src = "error.png"
        document.getElementById('imgurl').href = ""
        return
      }
      document.getElementById('errorlabel').style.visibility = "hidden"
      document.getElementById('imgView').src = resp.data
      document.getElementById('imgurl').href = resp.data
    }).catch((err) => {
      document.getElementById('errorlabel').innerText = "Error find image"
    })
  }

  render() {
    return (
      <div className="theBanner">
        <label id="errorlabel"></label>
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
