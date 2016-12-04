import {Router, Events} from "backbone"

export default Router.extend({
    routes: {
        ":menu(/:tab)(?collapse=:query)" : "routeHandler"
    },
    state: {
        menu: "products",
        tab: "list"
    },
    initialize(){
        Events.on('changeState:router', ( eventObj ) => {
            this.setState( eventObj );
        });
    },
    routeHandler( menu, tab, query ) {
        this.setState( {
            menu: menu,
            tab: tab,
            query: query
        } );
    },
    setState( args ) {
        _.extend(this.state, args);
        this.navigate( this.makeUrl() , {trigger: true})
        Events.trigger( 'stateChanged:router', this.state );
    },
    getState( key ) {
        return !key ? this.state : this.state.hasOwnProperty(key) ? this.state[key] : null
    },
    makeUrl(){
        return _.reduce(this.getState(), ( res, value, key, arr ) => {
            return res + (value ? (key == "query" ? '?collapse=' : '/') + value : '');
        }, '' );;
    }
})