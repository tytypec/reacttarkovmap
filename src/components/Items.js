import axios from 'axios';

export default class Images {
    items;

    async getItems() {
        if (this.items) { return this.items; }

        this.items = axios.get("http://localhost:3000/images/")
        .then((res)=>{
            return res.data;  
        })
        .catch((error)=>{
            console.log(error);
            console.log("image names did not load");
        })  

        return this.items;
    }
}