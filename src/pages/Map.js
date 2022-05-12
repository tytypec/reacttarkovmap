import React, {useEffect, useLayoutEffect, useState } from 'react';
import Canvas from "../components/Canvas"
import '../Map.css';
import "../index.js";
import axios from 'axios';


export default class Map extends React.Component{
    canvasOverlay;
    locations = [];

    imageURLS = ['images/items/GPU4.png', 'images/items/greenBat.png', 'images/items/physicalBitcoin.png', 'images/items/ledx.png', 'images/items/aesa.png', 'images/items/defib.png','images/items/intel.png', 'images/items/mfilter.png', 'images/items/mtube.png', 'images/items/vpx.png'];

    constructor(props){
        super(props); 
        this.canvasOverlay = React.createRef();
    }

    componentDidMount(){
        axios.get("http://localhost:3000/items/")
            .then((res)=>{
                console.log(res);
                
            })
            .catch((error)=>{
                console.log(error);
                console.log("uh oh no movies");
            })  
    }

    canvas(){
        return this.canvasOverlay.current;
    }

    drawImage(event){
        const rect = this.canvas().getBoundingClientRect()
        var location = {
            xValue: event.clientX - rect.left,
            yValue: event.clientY - rect.top,  
        };
        this.locations.push(location);
    }

    





    // imagesLoaded(){
    //      console.log("Images loaded",loadedImagesAvailableForSelection)
    //      drawOnInitialLoad();
    //      history();
    //      canvasOverlay.addEventListener("click", drawLocation);
    // }

    render() {
        
        return(
            <div className="mainContainer">
                <div className="mapContainer">
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
            </div>
            
        );
        
    }
    

}