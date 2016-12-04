import Data from "json-loader!../data/content.json";

export class DataStorage {
    constructor(){
        this.data = Data[0];
    }
    getDefaultTabSlug(key){
        return this.data.tabs.hasOwnProperty( key ) ? this.data.tabs[key][0].slug : {}
    }
    getTabs( key ){
        return this.data.tabs.hasOwnProperty( key ) ? this.data.tabs[key] : {}
    }
    getMenu(){
        return this.data.menu
    }
    getContent( key ){
        return this.data.content.hasOwnProperty( key ) ? this.data.content[key] : {}
    }
}

