import {Model, Events} from "backbone";

export default Model.extend({
    defaults: {},
    toggleState( state ){
        this.set( 'active', state );
    }
})