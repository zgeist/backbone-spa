import {View} from "backbone"
import Template from "./view.html"
import _ from "underscore";

import Accourdion from "../Accordion"

export default View.extend({
    el: '#main-content',
    template: _.template(Template),
    children: [Accourdion],
    initialize(){
        this.render();
        this.children.forEach( (child) => new child() );
    },
    render(){
        this.$el.html( this.template() )
    }
});