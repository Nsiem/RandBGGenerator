import React from "react";
import Banner from './Banner';
import Imageviewer from "./Imageviewer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <Banner/>
        <Imageviewer/>
        <footer id="thefooter">
          <a href="https://wall.alphacoders.com/"> Powered by Wallpaper Abyss</a>
        </footer>
      </div>
    )
  }
}

export default App;
