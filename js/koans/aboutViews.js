describe('About Backbone.View', function() {
    var todoView;
    
    beforeEach(function() {
        var todo = new Todo();
        todo.localStorage = new Store('ViewSpecs');
        
        $('body').append('<ul id="todoList"></ul>');
        todoView = new TodoView({ model: todo });
    });
    
    afterEach(function() {
        todoView.remove();
        $('#todoList').remove();
    });

    describe('Views Contain Properties',function () {
      it('View has tagName set that is used to create a DOM element', function() {

          // what is the default model tag name?
          var tagName = 'what html element represents this view?';
          
          expect(tagName).toEqual(todoView.tagName); // the literal tagName
      });

      it('View has an el(ement) property that is the DOM element', function() {
        
        // this is familiar, what is the tagName of the DOM element for this view?
        var tagName = 'what is the html element tagName this view';

        expect(tagName).toEqual(todoView.el.tagName.toLowerCase());
      });

      it('View has todo model propert set when created', function() {
        var todo = new Todo();

        // how would you instantiate a view to have model set as a property?
        
        var todoView = undefined; // edit this line

        expect(todoView.model).toBe(todo);
      });

    });
    
    it('Views can have custom methods you can call.', function() {
        // What method would you call on todoView to get this expectation to pass?
        // Hint: You can accomplish this without accessing todoView.model directly.
        
        expect(todoView.model.get('done')).toBe(true);
    });
    
    it('When rendered, the view element contains the complete DOM representation of the view.', function() {
        todoView.render();
        
        // Hint: render() just builds the DOM representation of the view, but doesn't insert it into the DOM.
        //       How would you append it to the ul#todoList? 
        //       How do you access the view's DOM representation?
        //
        // Hint: http://documentcloud.github.com/backbone/#View-el and TodoApp.addOne in todos.js
        
        expect($('#todoList').find('li').length).toBe(1);
    });
    
    it('Views can contain an events hash to wire up view methods to DOM events.', function() {
        var viewElt;
        
        spyOn(todoView.model, 'toggle');
        
        // Render the <li> for the view, and append it to the <ul>
        $('#todoList').append(todoView.render().el);
        
        viewElt = $('#todoList li input.check').filter(':first');
        
        // trigger what event here?

        expect(todoView.model.toggle).toHaveBeenCalled();
    });
});
