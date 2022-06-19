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
    items = [];
    ready = false;
    loadedImagesAvailableForSelection = [];
    uniqueItemNumber = 0;
    executed = false;


    constructor(props){
        super(props); 
        this.canvasOverlay = React.createRef();
        this.state = {
            ready: false,
            canvasLoaded: false,
            imagesLoaded: false,
            loadedFromLocalStorage: false,
            imageSelected: 0,
        };    
    }
    

    componentDidMount(){
        var imageRepository = new Images();
        imageRepository.getItems()
            .then((itemsFromApi) => {
                this.items = itemsFromApi;
                this.setState ({ready: true}) 
            });
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
            // this.setState ({loadedFromLocalStorage: true})
            return locations;
        }
        
    }


    onLoadDraw(event){ 
        
        
        if(this.canvasOverlay.current === null && !this.executed){
            console.log('canvas not loaded yet');
            this.componentDidMount();   
        }

        else{
            if(!this.executed){
                this.executed = true;
                console.log('canvas loaded');
                const context = this.canvasOverlay.current.getContext('2d');
                this.imageLoader(context);
                
   
            }
            
        }
    }
    

    canvas(){
        return this.canvasOverlay.current;
    }


    imageLoader(context){
        console.log(this.items[0].url);
        var imageCount = 0;

        for (let i = 0; i < this.items.length; i++){
            const image = new Image();
            image.src = this.items[i].url;

            image.onload = () => {
                imageCount += 1;
                if(imageCount === this.items.length){
                    console.log('images are loaded! Great Job!');
                    this.populateMapFromLocalStorage(context);
                    this.setState ({canvasLoaded: true})
                    this.setState ({imagesLoaded: true})
                }
            }
            
            this.loadedImagesAvailableForSelection.push(image);           
        }
          
    }


    drawImage(event){
        console.log("item url"  , this.loadedImagesAvailableForSelection[this.uniqueItemNumber]);
        const context = this.canvasOverlay.current.getContext('2d');
        console.log("unique number ", this.uniqueItemNumber);
        
        const rect = this.canvas().getBoundingClientRect()
        var location = {
            xValue: event.clientX - rect.left,
            yValue: event.clientY - rect.top,
            item: this.uniqueItemNumber,
            url: "./images/GPU4.png"  
        };

        this.locations.push(location);
        localStorage.setItem('customsTextValues', JSON.stringify(this.locations));
        this.populateMapFromLocalStorage(context);
    }


    populateMapFromLocalStorage(context, array){
        var currentDraw;
        console.log("drawing called");

        for (var j = 0; j < this.locations.length; j++) {
            currentDraw = this.loadedImagesAvailableForSelection[this.locations[j].item];
            context.drawImage(currentDraw, this.locations[j].xValue - 15, this.locations[j].yValue - 13);
        } 
    }


    
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


    imageSet(unique){
        this.uniqueItemNumber = unique;
        console.log(this.uniqueItemNumber);
    }


    render() {
        var itemList;
        var map;
        var itemDisplay;
        // console.log(this.state.ready);
        // console.log("inside State Ready", map);
        
        if (this.state.ready) {
           map = <div className="mapContainer">
                    <img id={"mapOverlay"} src={this.props.mapImage} width={1590} height={834} alt="The map didn't load"/>
                    <canvas 
                        id="canvasOverlay"
                        ref={this.canvasOverlay} 
                        style={{color:'blue'}} 
                        width="1587" 
                        height="831"
                        onClick={this.drawImage.bind(this)}
                        onLoad={this.onLoadDraw(this)}
                        >
                    </canvas> 
                </div>
     
        } 

        
        if(this.state.canvasLoaded) {
            itemDisplay = <div id="currentlySelectedSticker">
            Current Image <br /> <img src={this.items[this.uniqueItemNumber].url} alt="loading error"/>
            {/* Current Image <br /> <img src={require("http://localhost:3000/image/GPU4.png")} alt="loading error"></img> */}
            </div>

            // for (let k = 0; k < this.items.length; k++){   
            //     var listItem = `<li><img src=${this.items[k].url} onClick={() => ${this.imageSet(k)}} alt="loading error"/></li>`
            //     var fullList = listItem += listItem
            // }
            //     itemList = 
            //         <ul>
            //         {fullList}
            //         </ul>
            
            // <ul>
            //     <li><img src={this.items[0].url} onClick={() => {this.imageSet('0')}} alt="loading error"/></li>
            // </ul>
            
        }
        

        if(this.state.canvasLoaded){
            // console.log("inside canvasLoaded", map);
            // this.onLoadDraw();
        }
        return(
            <div className="mainContainer">
                {map}
                <div id="sideBar">
                    {itemDisplay}
                    <div>{itemList}</div>
                    <div className="dropdown">
                        <button onClick={() => {this.imageSelectDropdown()}} className="dropbtn">Select Image</button>
                            <div id="imageDropdown" className="dropdown-content">
                            
                                <ul>
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
                                </ul>
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