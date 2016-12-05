import {View, Events} from "backbone"
import Collection from "./collection"
import Template from "./view.html"
import "./accordion.styl"

export default View.extend({
    el: '#accourdion',
    template: _.template(Template),
    collection: new Collection(),
    events: {
      "click .collapse-title": "toggle"
    },
    initialize(){
        this.render();
        this.listenTo(this.collection, 'reset', this.render);
    },
    toggle(event){
        this.collection.setToggle( event.target.id );
        Events.trigger('changeState:router', { query: this.collection.getAllOpened() });
    },
    render(){
        this.$el.html( this.template( { content : this.collection.toJSON() } ) )
    }
});