import Page from "../app/views/Page"
import TabsView from "../app/views/Tabs";
import MenuView from "../app/views/SideMenu";

describe('Top side menu view', function(){
    var tabsView, page;

    beforeEach(function(){
        page = new Page();
        tabsView = new TabsView();
        tabsView.collection.parent = 'products';
        tabsView.collection.initialize();
    });

    it('should have a tag name of div', function(){
        expect(tabsView.tagName).toEqual('div');
    });

    it('should have a id name of side-menu', function(){
        expect(tabsView.id).toEqual('top-menu');
    });

    it('should have a links title', function(){
        expect(tabsView.el.querySelector('a').innerText).toBe('List');
    });

    it('should have a links html', function(){
        expect(tabsView.$el.find('li').html().trim()).toBe('<a href="/list" id="1">List</a>');
    });

    it('should set active state', function(){
        spyOn(tabsView.collection, 'setActive');

        tabsView.$el.find('a').click();

        expect(tabsView.collection.setActive).toHaveBeenCalled();
    });

});

describe('Left side menu view', function(){
    var menuView, page;

    beforeEach(function(){
        page = new Page();
        menuView = new MenuView();
        menuView.collection.initialize();
    });

    it('should have a tag name of div', function(){
        expect(menuView.tagName).toEqual('div');
    });

    it('should have a id name of side-menu', function(){
        expect(menuView.id).toEqual('side-menu');
    });

    it('should have a links title', function(){
        expect(menuView.el.querySelector('a').innerText).toBe('Products');
    });

    it('should have a links html', function(){
        expect(menuView.$el.find('li').html().trim()).toBe('<a href="/products" id="1">Products</a>');
    });

    it('should set active state', function(){
        spyOn(menuView.collection, 'setActive');

        menuView.$el.find('a').click();

        expect(menuView.collection.setActive).toHaveBeenCalled();
    });

});