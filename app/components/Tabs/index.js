import {View, Events} from "backbone";
import Model from "./model"
import Collection from "./collection"

import MenuHtml from "./menu.html";
import "./menu.styl";

export default View.extend({
    el: "#top-menu",
    id: 'top-menu',
    collection: new Collection(),
    template: _.template(MenuHtml),
    events: {
        "click a": "onClick"
    },
    initialize() {
        this.render();
        this.listenTo(this.collection, "reset change", this.render);
    },
    onClick( event ){
        event.preventDefault();
        this.collection.setActive( event.target.id );
    },
    render () {
        this.$el.html( this.template( { menuItems: this.collection.toJSON() } ) );
    }
})