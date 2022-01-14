import React from "react";
import axios from "axios";

export default class ListView extends React.Component {
    
    componentDidMount() {
        axios.get(`http://localhost:5000/history`).then((result) => {
            if(result.data === "0") {document.getElementById('errorlabel').innerText = "Error loading history"; return}
            for(let i = 0; i < result.data.length; i++) {
                var link = document.createElement('a')
                link.href = result.data[i]['link']
                link.target = "_blank"
                var listitem = document.createElement('li')
                listitem.textContent = `${result.data[i]['title']} - ${result.data[i]['datestring']}`
                link.appendChild(listitem)
                document.getElementById("listholder").appendChild(link)
            }
        }).catch((err) => {
            console.log(err)
            document.getElementById('errorlabel').innerText = "Error loading history"
        })
    }

    render() {
        return (
            <div id="listholder">
                
            </div>
        )
    }
}
