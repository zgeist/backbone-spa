import MenuModel from "../app/views/SideMenu/model";
import AccordionModel from "../app/views/Accordion/model";

describe( 'Side menu model', function(){
    var menuModel;
    beforeEach(function(){
        menuModel = new MenuModel({
            "id": 1,
            "active": false,
            "slug": "products",
            "title": "Products"
        })
    });

    it( 'should have define ID property', function(){
        expect( menuModel.get('id') ).toBeDefined();
    } );

    it( 'should toggleState method change state', function(){

        menuModel.toggleState( true );

        expect( menuModel.get('active') ).toBeTruthy();

    } );

} );

describe( 'Accordion model', function(){
    var accordionModel;
    beforeEach(function(){
        accordionModel = new AccordionModel({
            "id": 2,
            "title": "Item 2",
            "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel arcu non dolor dignissim aliquam in eget ligula. Suspendisse consequat sit amet sem vitae porta. Sed commodo velit congue turpis eleifend, quis convallis purus fringilla. Vivamus nulla orci, tempus sed odio nec, euismod laoreet eros. Donec mollis scelerisque vulputate. Suspendisse mollis odio libero, sed egestas dui pellentesque sed. Cras molestie nec purus posuere tincidunt. In fringilla placerat neque ac consectetur.",
            "toggle": false
        })
    });

    it( 'should have define ID property', function(){
        expect( accordionModel.get('id') ).toBeDefined();
    } );

    it( 'should toggleState method change state to "TRUE"', function(){

        accordionModel.toggleState();

        expect( accordionModel.get('toggle') ).toBeTruthy();

        accordionModel.toggleState();

        expect( accordionModel.get('toggle') ).toBeFalsy();

    } );

} );