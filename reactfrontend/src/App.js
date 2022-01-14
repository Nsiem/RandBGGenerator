import React from "react";
import Banner from './Banner';
import Imageviewer from "./Imageviewer";
import ListView from "./ListView"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <Banner/>
        <div id="mainscreen">
          <ListView/>
          <div id="remountcomp">
            <Imageviewer/>
          </div>
          
        </div>
        
        <footer id="thefooter">
          <a href="https://wall.alphacoders.com/"> Powered by Wallpaper Abyss</a>
        </footer>
      </div>
    )
  }
}

export default App;
