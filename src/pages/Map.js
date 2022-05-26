//1) need a function that returns image URLS that function that front end class the backend

import React, {useEffect, useLayoutEffect, useState } from 'react';
import Canvas from "../components/Canvas"
import '../Map.css';
import "../index.js";
import axios from 'axios';
import Images from '../components/Items'
import { logDOM } from '@testing-library/react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


export default class Map extends React.Component{
    canvasOverlay;
    locations = this.onloadImageLocalStorage();
    // locations = JSON.parse(localStorage.getItem('customsTextValues'));
    items = [];
    ready = false;
    // imageURLS = ['images/items/GPU4.png', 'images/items/greenBat.png', 'images/items/physicalBitcoin.png', 'images/items/ledx.png', 'images/items/aesa.png', 'images/items/defib.png','images/items/intel.png', 'images/items/mfilter.png', 'images/items/mtube.png', 'images/items/vpx.png'];

    constructor(props){
        super(props); 
        this.canvasOverlay = React.createRef();
        this.state = {ready: false}; 
        // var backEndImageNames;
        
    }
    

    componentDidMount(){
        var imageRepository = new Images();
        //get items is asycn we dont know when items will get back
        imageRepository.getItems()
            .then((itemsFromApi) => {
                this.items = itemsFromApi;
                this.setState ({ready: true}) 
                console.log("inside foo " , this.items);
            });
            //must use .then
            // console.log("oustside foo in components " , this.items);
        
        // console.log(imageRepository.items);
    }
    
            
       

    onloadImageLocalStorage(){

        if (localStorage.getItem('customsTextValues') == null) {
            console.log('no local storage, create new array');
            var locations = [];
            return locations;
        }
        else {
            console.log("loading from local storage")
            locations = JSON.parse(localStorage.getItem('customsTextValues'));
            return locations;
            //drawLocation("initialLoad");
        }
        //{xValue: 760, yValue: 244, item: 'gpu', url: './images/GPU4.png'}
    }


    //think about this function as a variable -patr
    //need a memory for items so it doesnt call backend everytime
    

    canvas(){
        return this.canvasOverlay.current;
    }

    drawImage(event){
        const image = new Image();
        image.src = "http://localhost:3000/image/GPU4.png";
        const context = this.canvasOverlay.current.getContext('2d');

        const rect = this.canvas().getBoundingClientRect()
        var location = {
            xValue: event.clientX - rect.left,
            yValue: event.clientY - rect.top,
            item: "gpu",
            url: "./images/GPU4.png"  
        };

        // context.beginPath();
        // context.arc(event.clientX, event.clientY, 50, 0, Math.PI * 2, true);
        // context.arc(event.clientX - rect.left, event.clientY - rect.top, 50, 0, Math.PI * 2, true);
        // context.fill();
        // context.drawImage(image, event.clientX - rect.left - 15, event.clientY - rect.top - 13);
        // context.stroke();
        // context.drawImage(image, 700, 300);

        this.locations.push(location);
        console.log("locations log ", this.locations);
        localStorage.setItem('customsTextValues', JSON.stringify(this.locations));
        
        // context.drawImage(image, event.clientX - rect.left - 15, event.clientY - rect.top - 13);

        // this.locations.forEach(function (item, j) {
        //     var poop = this.locations[j].xValue 
        //     console.log(poop);
        //     // context.drawImage(image, this.locations[j].xValue, this.locations[j].yValue);
        // }); 

        for (var j = 0; j < this.locations.length; j++) {
            context.drawImage(image, this.locations[j].xValue - 15, this.locations[j].yValue - 13);
        } 
        
    }

    // makes reset button functional
    reset(){
        console.log("reset")
        if (window.confirm('Are you sure you want to reset your map?')) {
            localStorage.removeItem("customsTextValues");
            //localStorage.clear();
            console.log("you clicked reset")
            window.location.reload();
        } else {

        }
    }
    
    // makes item drown down menu function
    imageSelectDropdown() {
        document.getElementById("imageDropdown").classList.toggle("show");
    }




    // imagesLoaded(){
    //      console.log("Images loaded",loadedImagesAvailableForSelection)
    //      drawOnInitialLoad();
    //      history();
    //      canvasOverlay.addEventListener("click", drawLocation);
    // }

    render() {
        var itemList;
        var map;
        console.log(this.state.ready);
        if (this.state.ready) {
           map = <div className="mapContainer">
                    <img id={"mapOverlay"} src={this.props.mapImage} width={1590} height={834} alt="The map didn't load"/>
                    <canvas 
                        id="canvasOverlay"
                        ref={this.canvasOverlay} 
                        style={{color:'blue'}} 
                        width="1587" 
                        height="831"
                        onClick={this.drawImage.bind(this)} // reference to a function
                        >
                    </canvas>        
                </div>
        } 

        return(
            <div className="mainContainer">
                {map}
                <div id="sideBar">
                    <div id="currentlySelectedSticker">
                        {/* Current Image <br /> <img src={require("./images/GPU4.png")} alt="loading error"/> */}
                        Current Image <br /> <img src="http://localhost:3000/image/GPU4.png" alt="loading error"/>
                    </div>
                    <div className="dropdown">
                        <button onClick={() => {this.imageSelectDropdown()}} className="dropbtn">Select Image</button>
                            <div id="imageDropdown" className="dropdown-content">
                            <div>{itemList}</div>
                                {/* <ul>
                                    <li><img src={require("./images/GPU4.png")} onClick={() => {this.imageSet('0')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/greenBat.png")} onClick={() => {this.imageSet('1')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/physicalBitcoin.png")} onClick={() => {this.imageSet('2')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/ledx.png")} onClick={() => {this.imageSet('3')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/aesa.png")} onClick={() => {this.imageSet('4')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/defib.png")} onClick={() => {this.imageSet('5')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/intel.png")} onClick={() => {this.imageSet('6')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/mfilter.png")} onClick={() => {this.imageSet('7')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/mtube.png")} onClick={() => {this.imageSet('8')}} alt="loading error"/></li>
                                    <li><img src={require("./images/items/vpx.png")} onClick={() => {this.imageSet('9')}} alt="loading error"/></li>
                                </ul> */}
                            </div>
                    </div>
                    <div className="sideBarTitle">History</div>
                    <div id="locationsTable">
                        {/* <table> 
                            <tr>
                                <th>Loot</th>
                            </tr>
                        </table> */}
                    </div>
                        <button onClick={() => {this.reset()}}>Reset</button>
                    </div>                
            </div>
            
        );
        
    }
    

}

    // async imageMakingMachine(){
    //     var array = await this.Items();
    //     var tempArray = []
    //     array.forEach((element, index) => {
    //         var imgName = array[index].image
    //         var imgURL = array[index].url
    //         var loadingImage = {
    //             [imgName] : "require(‘" + imgURL + "’)"
    //             // [imgName] : imgURL,
    //             // string: imgName + ": require(‘" + imgURL + "’)"
    //         };
    //         tempArray.push(loadingImage)
    //     });
    //     this.loadedImages = tempArray
    // }

        // items;
    // async Items() {
    //     if (this.items) { return this.items; }

    //     this.items = axios.get("http://localhost:3000/images/")
    //     .then((res)=>{
    //         return res.data;  
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //         console.log("image names did not load");
    //     })  

    //     return this.items;
    // }