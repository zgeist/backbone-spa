import {Model} from "backbone"

export default Model.extend({
    defaults: {
        toggle: false
    },
    toggleState( state ){
        this.set( 'toggle', state != undefined ? state : !this.get('toggle') );
    }
})