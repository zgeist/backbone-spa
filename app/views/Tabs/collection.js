import {Collection, Events} from "backbone";
import Model from "./model";
import {DataStorage} from "../../Helpers"

export default Collection.extend({
    parent: 'products',
    model: Model,
    initialize(){
        this.DataStorage = new DataStorage();
        this.add( this.DataStorage.getTabs( this.parent ) );

        Events.on( 'stateChanged:router', ( eventObj ) => {
            if( eventObj.menu && eventObj.menu.replace('/', '') != this.parent ){
                this.parent = eventObj.menu.replace('/', '');
                this.reset( this.DataStorage.getTabs( this.parent ) );
                //this.get(1).toggleState(true)
            }
            if( eventObj.tab ) {
                this.map( ( model )=> model.toggleState( model.get('slug') == eventObj.tab ) );
            }
        } )
    },
    setActive( id ){
        this.models.forEach( (model) => {
            model.toggleState( model.id == id )
        } );


        Events.trigger('changeState:router', {
            tab: this.get(id).get('slug'),
            query: ''
        });

        this.reset(this.models);
    }
});