import React, { Component } from 'react';
import './PlayerPool.css';
import Player from '../Player/Player';

class PlayerPool extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.upload = this.upload.bind(this);
    this.addPlayerToPool = this.addPlayerToPool.bind(this);
    console.log(this.props);
  }

    addPlayerToPool(player){
      var id = player.state.id;
      var state = player.state;
      this.setState({[id]: state});
    }


    upload(){
        var fileUpload = document.getElementById("fileUpload");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
        if (regex.test(fileUpload.value.toLowerCase())) {
            if (typeof (FileReader) != "undefined") {
                var reader = new FileReader();
                reader.onload = function (e)
                 {
                    var table = document.createElement("table");
                    var rows = e.target.result.split("\n");
                    for (var i = 1; i < rows.length; i++) {
                        var cells = rows[i].split(",");
                        if (cells.length > 1) {
                            var row = table.insertRow(-1);
                            var player = new Player(this.props, i, cells[1], cells[3], cells[5], cells[7], cells[9], cells[10], cells[11], cells[13]);
                            console.log(player.state);
                            this.addPlayerToPool(player);

                            // for (var j = 0; j < cells.length; j++) {
                            //   if(j === 1 || j === 3 || j === 5 || j === 6 || j === 7 || j === 9 || j === 10 || j === 11 || j === 13){
                            //     var cell = row.insertCell(-1);
                            //     cell.innerHTML = cells[j];
                            // }
                          // }
                        }
                    }
                    // var dvCSV = document.getElementById("dvCSV");
                    // console.log(dvCSV);
                    // dvCSV.innerHTML = "";
                    // dvCSV.appendChild(table);
                    // console.log(table);
                    console.log(this.state);
                }.bind(this);
                reader.readAsText(fileUpload.files[0]);
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Please upload a valid CSV file.");
        }
    }





  render(){
    return(
        <div className="PlayerPool">
        <input type="file" id="fileUpload" />
        <input type="button" id="upload" value="Upload" onClick={this.upload} />
        <hr />
        <div id="dvCSV">
        </div>
          <p> This is where the player pool goes</p>
        </div>
    );
  }
}
export default PlayerPool;
