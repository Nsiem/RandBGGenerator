import React from "react";
import Banner from './Banner';
import Imageviewer from "./Imageviewer";
import ListView from "./ListView"

export default class Wrapper extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <div id="mainscreen">
                    <ListView/>
                <div id="remountcomp">
                    <Imageviewer/>
                </div>
                
                </div>
            </div>
        )
    }
}
