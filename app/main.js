import Backbone from "backbone"
import Router from "./router/router"
import Page from "./components/Page"

import "./assets/styl/main.styl"

class App {
    constructor() {

        this.router = new Router();
        Backbone.history.start({ pushState: true});

        $(window).ready( () => this.renderDOM() );
    }
    renderDOM(){
        this.page = new Page( this );
    }
}

export default new App();

