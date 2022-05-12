import React, {useEffect, useLayoutEffect, useState } from 'react';
import Canvas from "../components/Canvas"
import '../Map.css';
import "../index.js";


export default class Customs extends React.Component{
    render() {
        
        return(
            <div className="mainContainer">
                <div className="mapContainer">
                    <img id={"mapOverlay"} src={require("./images/customsMap.png")} width={1590} height={834} alt="The map didn't load"/>
                    <canvas 
                        id="canvasOverlay"
                        ref={this.canvasOverlay} 
                        style={{color:'blue'}} 
                        width={1587} 
                        height={831}
                        >
                    </canvas>        
                </div>
            </div>
            
        );
        
    }
    

}