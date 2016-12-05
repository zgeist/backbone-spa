import AccordionCollection from "../app/components/Accordion/collection.js"
import TabsCollection from "../app/components/Tabs/collection.js"
import MenuCollection from "../app/components/SideMenu/collection.js"

describe('Accordion Collection', function(){
    var accourdionCollection;

    beforeEach(function() {
        accourdionCollection = new AccordionCollection();
        accourdionCollection.parent = 'best-sellers';
        accourdionCollection.initialize();
    });

    it('should have a default model', function(){
        expect(accourdionCollection.model).toBeTruthy();
    });

    it('should have a models array', function(){
        expect(accourdionCollection.models).toBeTruthy();
    });

    it('should have a data storage', function(){
        expect(accourdionCollection.DataStorage).toBeTruthy();
    });

    it('should have setToggle method', function(){
        expect(accourdionCollection.setToggle).toBeTruthy();
    });

    it('should have setDefaults method', function(){
        expect(accourdionCollection.setDefaults).toBeTruthy();
    });

    it('should have getAllOpened method', function(){
        expect(accourdionCollection.getAllOpened).toBeTruthy();
    });
});

describe( 'Tabs Collection', function(){
    var tabsCollection;

    beforeEach(function(){
        tabsCollection = new TabsCollection();
        tabsCollection.parent = 'products';
        tabsCollection.initialize();
    });

    it('should have a default model', function(){
        expect(tabsCollection.model).toBeTruthy();
    });

    it('should have a models array', function(){
        expect(tabsCollection.models).toBeTruthy();
    });

    it('should have a data storage', function(){
        expect(tabsCollection.DataStorage).toBeTruthy();
    });

    it('should have setActive method', function(){
        expect(tabsCollection.setActive).toBeTruthy();
    });

} );

describe( 'Menu Collection', function(){
    var menuCollection;

    beforeEach(function(){
        menuCollection = new MenuCollection();
        menuCollection.initialize();
    });

    it('should have a default model', function(){
        expect(menuCollection.model).toBeTruthy();
    });

    it('should have a models array', function(){
        expect(menuCollection.models).toBeTruthy();
    });

    it('should have a data storage', function(){
        expect(menuCollection.DataStorage).toBeTruthy();
    });

    it('should have setActive method', function(){
        expect(menuCollection.setActive).toBeTruthy();
    });

} );