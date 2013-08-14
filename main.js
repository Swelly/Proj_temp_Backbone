// Creates an object
var Project = Backbone.Model.extend({
  defaults: {
    name: "Default Project",
    github_url: "http://github.com/Swelly/portfolio",
    live_url: "http://Instagram.com/WesC17",
    thumbnail_url: "http://github.com/Swelly/portfolio/preview.jpg",
    description: "Here's me awesome portfolio page"
  }
});

// This is replaced by the above 'var Project'
var project = {
  name: "Wesley Carr",
  github_url: "http://github.com/Swelly/portfolio",
  live_url: "http://Instagram.com/WesC17",
  thumbnail_url: "http://github.com/Swelly/portfolio/preview.jpg",
  description: "Here's me awesome portfolio page"
};

// This needs to be replaced with a Collection
var projects = {projects: [project, project, project] };

// COLLECTION DONE
var Projects = Backbone.Collection.extend({
  model: Project
});

// Router
var AppRouter = Backbone.Router.extend({
  routes:{},
  initialize: function(options) {
     this.projects = new Projects([
        new Project(),
        new Project(),
        new Project()
      ]);
  }
});


$(function() {
  Handlebars.registerPartial('project', $('#project-template').html());

  // Loads the project template
  var source = $('#projects-template').html();

  // Renders the html into an html template
  var template = Handlebars.compile(source);

  // Inserts the data into the template and renders the templatedHTML
  var templateHTML = template(projects);

  // Appends the templatedHTML to the #main div
  $('#main').append(templateHTML);


  var app = new AppRouter();
})
