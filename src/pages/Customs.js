
import React, {useEffect, useLayoutEffect, useState } from 'react';
import Canvas from "../components/Canvas"
import '../Map.css';
import "../index.js";

// const draw = (context) => {
//     context.fillStyle = "rgb(200, 0, 0)";
//     context.fillRect(10, 10, 50, 50);
//     const ctx = Canvas.current.getContext("2d");
//     const image = new Image();
//     image.src = "./images/customsMap.png";
//     image.onload = () => {
//     context.drawImage(image, 0, 0, 831, 1587);
//     };
// };

export default class Customs extends React.Component{

    constructor(){
        super()
        console.log('hi');
        
        //https://www.geeksforgeeks.org/different-ways-of-writing-functions-in-javascipt/
        // https://pythonnumericalmethods.berkeley.edu/notebooks/chapter07.03-Inheritance-Encapsulation-and-Polymorphism.html
        //Onject oriented Programming Concepts
        // -Encapsulation
        // -Polymorphism
        // -Inheritance  
    }

    componentDidMount(){
        const canvas = document.getElementById('canvasOverlay'); // https://blog.cloudboost.io/using-html5-canvas-with-react-ff7d93f5dc76
        const context = canvas.getContext('2d');

        context.fillStyle="blue";
        context.fillRect(100,100,100,100);
        context.strokeRect(100,100,100,100);
    }

    sayHello(){
        console.log('poodles');
        
    }

    render() {

        // const canvasRef = React.useRef<HTMLCanvasElement>(null);
        // const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
        
        return(
            <body>
                <div class="mapContainer">
                    {/* <Canvas id={"canvasOverlay"} draw={draw} height={831} width={1587} /> */}
                    {/* <img id={"mapOverlay"} src={require("./images/customsMap.png")} width={1590} height={834} alt="The map didn't load"/>
                    <Canvas id={"canvasOverlay"} draw={draw} height={831} width={1587} /> 
                    <Canvas id={"highlightCanvas"} draw={draw} height={831} width={1587} /> */}
                    <img id={"mapOverlay"} src={require("./images/customsMap.png")} width={1590} height={834} alt="The map didn't load"/>
                    <canvas 
                        id="canvasOverlay"
                        ref="canvasOverlay" 
                        style={{color:'blue'}} 
                        width={1587} 
                        height={831}
                        // onClick={this.sayHello}
                        //onMouseDown={handleMouseDown}
                        // onMouseDown={handleMouseDown}
                        // onMouseMove={handleMouseMove}
                        // onMouseUp={handleMouseUp}
                        >
                    </canvas>
                          
                </div>

                <div id="sideBar">
                    <div id="currentlySelectedSticker">
                        Current Image <br /> <img src={require("./images/items/GPU4.png")} alt="loading error"/>
                    </div>
                    <div class="dropdown">
                        <button onClick={() => {imageSelectDropdown()}} class="dropbtn">Select Image</button>
                            <div id="imageDropdown" class="dropdown-content">
                                <ul>
                                    <li><img src={require("./images/items/GPU4.png")} onClick={() => {imageSet('0')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/greenBat.png")} onClick={() => {imageSet('1')}} alt="loading error"/></li>
                                    {/* <li><a onclick="imageSet('2')"><img src={require("./images/items/physicalBitcoin.png")} alt="loading error" onclick="imageSet('2')"/></a></li>
                                    <li><a onclick="imageSet('3')"><img src={require("./images/items/ledx.png")} alt="loading error" onclick="imageSet('3')"/></a></li>
                                    <li><a onclick="imageSet('4')"><img src={require("./images/items/aesa.png")} alt="loading error" onclick="imageSet('4')"/></a></li>
                                    <li><a onclick="imageSet('5')"><img src={require("./images/items/defib.png")} alt="loading error" onclick="imageSet('5')"/></a></li>
                                    <li><a onclick="imageSet('6')"><img src={require("./images/items/intel.png")} alt="loading error" onclick="imageSet('6')"/></a></li>
                                    <li><a onclick="imageSet('7')"><img src={require("./images/items/mfilter.png")} alt="loading error" onclick="imageSet('7')"/></a></li>
                                    <li><a onclick="imageSet('8')"><img src={require("./images/items/mtube.png")} alt="loading error" onclick="imageSet('8')"/></a></li>
                                    <li><a onclick="imageSet('9')"><img src={require("./images/items/vpx.png")} alt="loading error" onclick="imageSet('9')"/></a></li> */}
                                </ul>
                            </div>
                    </div>
                    <div class="sideBarTitle">History</div>
                    <div id="locationsTable">
                        <table> 
                            <tr>
                                <th>Loot</th>
                            </tr>
                        </table>
                    </div>
                        <button onClick={() => {reset()}}>Reset</button>
                    </div>
                <script src="index.js"> </script>                 
            </body>
            // <body>                   
            //                 <div id="sideBar">
            //                     <div id="currentlySelectedSticker">
            //                         Current Image <br /> <img src={require("./images/items/GPU4.png")}/>
            //                     </div>
            //                     <div class="dropdown">
            //                         <button onclick="imageSelectDropdown()" class="dropbtn" style="color: rgb(146, 146, 150); border-style: solid;">Select Image</button>
            //                             <div id="imageDropdown" class="dropdown-content">
            //                                 <ul>
            //                                     <li><a onclick="imageSet('0')"><img src={require("./images/items/GPU4.png")} onclick="imageSet('0')"/></a></li>
            //                                     <li><a onclick="imageSet('1')"><img src={require("./images/items/greenBat.png")} onclick="imageSet('1')"/></a></li>
            //                                     <li><a onclick="imageSet('2')"><img src={require("./images/items/physicalBitcoin.png")} onclick="imageSet('2')"/></a></li>
            //                                     <li><a onclick="imageSet('3')"><img src={require("./images/items/ledx.png")} onclick="imageSet('3')"/></a></li>
            //                                     <li><a onclick="imageSet('4')"><img src={require("./images/items/aesa.png")} onclick="imageSet('4')"/></a></li>
            //                                     <li><a onclick="imageSet('5')"><img src={require("./images/items/defib.png")} onclick="imageSet('5')"/></a></li>
            //                                     <li><a onclick="imageSet('6')"><img src={require("./images/items/intel.png")} onclick="imageSet('6')"/></a></li>
            //                                     <li><a onclick="imageSet('7')"><img src={require("./images/items/mfilter.png")} onclick="imageSet('7')"/></a></li>
            //                                     <li><a onclick="imageSet('8')"><img src={require("./images/items/mtube.png")} onclick="imageSet('8')"/></a></li>
            //                                     <li><a onclick="imageSet('9')"><img src={require("./images/items/vpx.png")} onclick="imageSet('9')"/></a></li>
            //                                 </ul>
            //                             </div>
            //                         </div>
            //                     <div class="sideBarTitle">History</div>
            //                     <div id="locationsTable">
            //                         <table> 
            //                             <tr>
            //                                 <th>Loot</th>
            //                             </tr>
            //                         </table>
            //                     </div>
            //                     <button id="resetButton" onclick="reset()">Reset</button>
            //                 </div>
            //             </div>
                        
            //     </body>
        );
        

    }
    

}

    // console.log("butts")
    var unique = "0";
    // var mapArea = document.getElementById('canvasOverlay');
    // console.log(mapArea)
    // var context = mapArea.getContext('2d');
    var highlightArea = document.getElementById('canvasOverlay');
    // var highlightCanvas = highlightArea.getContext('2d');
    // var questArea = document.getElementById('questCanvas');
    // var questCanvas = questArea.getContext('2d');

    var heatSize = 0;//parseInt(heatSizeSliderOutput.innerHTML);
    var yellowValue = 0;//parseInt(cirleColorOutput.innerHTML);
    var heatGrowthFactor = 0;//parseInt(circleSizeIncreaseOutput.innerHTML);
    var colorChangeFactor = 0;//parseInt(colorChangeOutput.innerHTML);
    // cross hair clicks at top corner of image. offsets to set crosshair to center of image.
    var xOffSet = 10;
    var yOffSet = 8;

    //this makes clicks write cooridnates in console.
    // function handleMouseDown(event){
    //     const {clientX, clientY} = event;
    //     console.log(clientX, clientY);

    // };

    function imageSelectDropdown() {
        console.log("hi")
        document.getElementById("imageDropdown").classList.toggle("show");
    }
    

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    function history() {
        var fillHtmlLocations = "<table> <tr> <th>Loot</th> </tr>";
        locations.forEach(function (item, j) {
            var temporaryImageSelctionNumber = locations[j].lootItemName;
            fillHtmlLocations += `<tr> <td> <img onmouseover='highlightImage(${j})' onmouseout='clearHighlight(${j})' src='${locations[j].imagePath[temporaryImageSelctionNumber]}'`;
            //fillHtmlLocations += locations[j].imagePath[temporaryImageSelctionNumber];
            fillHtmlLocations += `'</img> </td> <td> <img src='images/items/redX.png' onclick='removeLocation(${j})'</img> </td> </tr>`;
        });
        fillHtmlLocations += "</table>"
        document.getElementById("locationsTable").innerHTML = fillHtmlLocations;
    }


    function highlightImage(num){
        highlightCanvas.arc(locations[num].xValue + 2, locations[num].yValue + 2 ,21 , 0, 2 * Math.PI);
        highlightCanvas.fillStyle = 'rgba(250, 250, 250, 0.2)';
        highlightCanvas.fill();
    }


    function clearHighlight(num){
        highlightCanvas.clearRect(0, 0, 1587, 831);
        highlightCanvas.beginPath();
        drawOnInitialLoad();
    }


    function removeLocation(num){
        locations.splice(num,1);
        localStorage.setItem('customsTextValues', JSON.stringify(locations));
        context.clearRect(0, 0, 1587, 831);
        context.beginPath();
        drawOnInitialLoad();
        history();
    }


    function reset() {
        console.log("reset")
        if (window.confirm('Are you sure you want to reset your map?')) {
            localStorage.removeItem("customsTextValues");
            //localStorage.clear();
            console.log("you clicked reset")
            window.location.reload();
        } else {

        }

    }

    function imageSet(imageNumber){
        unique = imageNumber;
        console.log(unique)
        const element = document.getElementById("currentlySelectedSticker");
        // console.log(imageURL[unique])
        // element.innerHTML ="Current Image" + "<br>" + "<img src = " + imageURL[unique] + ">" ;
    }

    function drawLocation(event, canvas) {
        const rectangle = mapArea.getBoundingClientRect();
         
         var location = {
             xValue: event.clientX - rectangle.left,
             yValue: event.clientY - rectangle.top, 
             color: yellowValue, 
             size: heatSize,
             imagePath: imageURL,
             lootItemName: unique 
         };
         locations.push(location)
         localStorage.setItem('customsTextValues', JSON.stringify(locations));
         var locationToDraw = locations[locations.length - 1];
         context.drawImage(loadedImagesAvailableForSelection[unique], locationToDraw.xValue -xOffSet, locationToDraw.yValue -xOffSet);
         history()
         console.log(locations);
     }

     function drawOnInitialLoad(){
         locations.forEach(function (item, j) {
             context.drawImage(loadedImagesAvailableForSelection[locations[j].lootItemName], locations[j].xValue - xOffSet, locations[j].yValue -yOffSet);
         });
     }

     var imageURL = ['images/items/GPU4.png', 'images/items/greenBat.png', 'images/items/physicalBitcoin.png', 'images/items/ledx.png', 'images/items/aesa.png', 'images/items/defib.png','images/items/intel.png', 'images/items/mfilter.png', 'images/items/mtube.png', 'images/items/vpx.png'];
     var loadedImagesAvailableForSelection = [];
     var imageCount = 0;



     imageURL.forEach(src => {
         const image = new Image();
         image.src = src;
         image.onload = () => {
             imageCount += 1;
             if(imageCount === imageURL.length){
                 imagesLoaded();
             }
         }
         loadedImagesAvailableForSelection.push(image);
     });
     

     if (localStorage.getItem('customsTextValues') == null) {
         var locations = [];
     }
     else {
         console.log("loading from local storage")
         locations = JSON.parse(localStorage.getItem('customsTextValues'));
         //drawLocation("initialLoad");
     }


     function imagesLoaded(){
         console.log("Images loaded",loadedImagesAvailableForSelection)
         drawOnInitialLoad();
         history();
         canvasOverlay.addEventListener("click", drawLocation);
     }

