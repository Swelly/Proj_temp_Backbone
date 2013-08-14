// Creates an object
var Project = Backbone.Model.extend({
  //STEP 5: This s a model of our data that describes its behavior
  idAttribute: 'slug',
  defaults: {
    name: "Default Project",
    slug: "Default Project",
    github_url: "http://github.com/Swelly/portfolio",
    live_url: "http://Instagram.com/WesC17",
    thumbnail_url: "http://github.com/Swelly/portfolio/preview.jpg",
    description: "Here's me awesome portfolio page. Can\'t you see I like making portfolios?"
  }
});

// STEP 6: This is a collection that represents a set of our data
// Like an array with superpowers
var Projects = Backbone.Collection.extend({
  model: Project
});

var ProjectListView = Backbone.View.extend({
  // STEP 12. Setup and render the individual project
  tagName: 'li',
  initialize: function() {
    // Don't need to do anything here yet
  },
  render: function() {
    // STEP 13: Handlebars stuff goes here
    var source = $('#project-template').html(),
      template = Handlebars.compile(source),
      data = this.model.toJSON(),
      templateHTML = template(data);
    this.$el.html(templateHTML);

    // Allows for function chaining
    return this;
  }
});

var AppView = Backbone.View.extend({
  // STEP 8: This sets up the main page
  el: $('#main'),
  initialize: function() {
    // STEP 9: Populate the application with my appView template
    var appViewTemplate = $('#appView-template').html()
    this.$el.html(appViewTemplate);
    // Cache commonly used selectors
    this.list = $('#project-list');
  },
  render: function() {
    // STEP 10: Create views for each Project in the Projects collection
    this.collection.each(function(project){
      // STEP 11: Generate the backbone view object and set the model
      // Each project gets its own view
      var view = new ProjectListView({model: project});

      // Using our cached object from initialize, append the new view to the list
      this.list.append(view.render().el);
    }, this);

    // For method chaining
    return this;
  }
});



// This is a bit of a Router/Controller combination
var AppRouter = Backbone.Router.extend({
  // STEP 3: Setup Routes
  routes:{
    // url:method
    '':'index',
    'project/:slug':'getProject' // Save this and come back
  },
  initialize: function() {
    // STEP 4: intialize routes with data.
    // This gives me app.projects
     this.projects = new Projects([
        new Project({name: "First Project", slug: "first-project"}),
        new Project({name: "Second Project", slug: "second-project"}),
        new Project({name: "Third Project", slug: "third-project"})
      ]);
  },
  index: function() {
    // STEP 7: When someone goes to the index. This happens
    // Create a new instance of our AppView, pass in all our projects
    var appView = new AppView({collection: this.projects});
    // STEP 9: Calls render on appView
    appView.render();
  },
  getProject: function() {}
});

$(function() {
  // STEP 1: Create instance of Router
  var app = new AppRouter();

  // STEP 2: Start History
  Backbone.history.start();

});
