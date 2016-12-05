import {Model, Events} from "backbone";

export default Model.extend({
    defaults: {},
    initialize() {

    },
    toggleState( state ){
        this.set( 'active', state )
    }
})