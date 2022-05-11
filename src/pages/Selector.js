import React from 'react'


export default class Selector extends React.Component{

    constructor(data){
        super()
        this.fruit = data.fruit;
        console.log(this.fruit);
    }

    render(){

        return (
            <div>
                i am a child {this.fruit} 
            </div>
        )
    };
}


// export default class Customs extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             fruit: "apple"
//         };
//     }

//     <Selector fruit={this.state.fruit} />