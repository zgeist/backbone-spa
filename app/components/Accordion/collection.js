import {Collection, Events} from "backbone"
import Model from "./model"
import {DataStorage} from "../../Helpers"

export default Collection.extend({
    parent: null,
    model: Model,
    initialize(){
        this.DataStorage = new DataStorage();
        this.add( this.DataStorage.getContent( this.parent ) );

        Events.on( 'stateChanged:router', ( eventObj ) => {
            if( eventObj.tab && eventObj.tab.replace('/', '') != this.parent ){
                this.parent = eventObj.tab.replace('/', '');
                this.reset( this.DataStorage.getContent( this.parent ) )
            }

            this.setDefaults( eventObj.query )
        } )
    },
    setToggle( id ){
        this.get(id).toggleState();
        this.reset(this.models);
    },
    setDefaults( query ) {
        if( query ){
            query.split(',').forEach( (id) => this.get(id) ? this.get(id).toggleState() : null );
        } else {
            this.each( (model) => model.toggleState(false) );
        }

        this.reset(this.models);
    },
    getAllOpened(){
        return _.pluck( this.where( {
            toggle: true
        } ), 'id' ).join(',');
    }
})