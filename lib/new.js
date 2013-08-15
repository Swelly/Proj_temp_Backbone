var HumanRace = Backbone.Model.extend({
  defaults: {
    name: 'Jiminy',
    age: '22'
  }

});

var Human = Backbone.Collection.extend({
  model: HumanRace
});

// peeps = :new HumanRace({
//   peeps.alert = function() {
//     alert("something changed!");
//   }
// });
