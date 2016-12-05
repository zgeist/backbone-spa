import {View, Events} from "backbone";
import Model from "./model";
import Collection from "./Collection";

import MenuHtml from "./menu.html";
import "./menu.styl";

export default View.extend({
    el: "#side-menu",
    id: 'side-menu',
    collection: new Collection(),
    events: {
      "click": "onClick"
    },
    template: _.template(MenuHtml),
    initialize() {
        this.render();
        this.listenTo(this.collection, "reset", this.render);
    },
    onClick( event ){
        event.preventDefault();
        this.collection.setActive( event.target.id );
    },
    render () {
        this.$el.html(
            this.template(
                {
                    menuItems: this.collection.toJSON()
                }
            )
        );
    }
})