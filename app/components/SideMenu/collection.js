import {Collection, Events} from "backbone";
import Model from "./model";
import {DataStorage} from "../../Helpers"

export default Collection.extend({
    model: Model,
    initialize(){
        this.DataStorage = new DataStorage();
        this.add( this.DataStorage.getMenu() );

        Events.on( 'stateChanged:router', ( eventObj ) => {
            if( eventObj.menu ) {
                this.map( ( model )=> model.toggleState( model.get('slug') == eventObj.menu ) );
            }
        } );
    },
    setActive( id ){
        this.models.forEach( (model) => {
            model.toggleState( model.id == id )
        } );

        Events.trigger('changeState:router', {
            menu: this.get(id).get('slug'),
            tab: this.DataStorage.getDefaultTabSlug( this.get(id).get('slug') ),
            query: ''
        });

        this.reset(this.models);
    }
});