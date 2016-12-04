import {View} from "backbone"
import Template from "./view.html"
import SideMenu from "../SideMenu"
import Content from "../Content"
import Tabs from "../Tabs"

export default View.extend({
    el: 'body',
    template: _.template(Template),
    children: [SideMenu, Tabs, Content],
    initialize() {
        this.render();
        this.children.forEach( (child) => new child() );
    },
    render(){
        this.$el.html( this.template() );
    }
})