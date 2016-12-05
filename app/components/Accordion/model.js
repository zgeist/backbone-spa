import {Model} from "backbone"

export default Model.extend({
    defaults: {
        toggle: false
    },
    toggleState(){
        this.set( 'toggle', !this.get('toggle') );
    }
})