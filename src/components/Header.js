import React from "react";

class Header extends React.Component{
    render() {
        return(
            <div class="topBar">
                    <a class="active" href="/">Home</a>
                    <a href="/Customs">Customs</a>
                    <a href="/interchange.html">Interchange</a>
                    <a href="/lighthouse.html">Lighthouse</a>
                    <a href="/reserve.html">Reserve</a>
                    <a href="/shoreline.html">Shoreline</a>
                    <a href="/woods.html">Woods</a>
                    <a href="https://www.tyler-pecora.com/">Back to Portfolio</a>
            </div>
        );

    }
}

export default Header;