Template.menu.events ({
 'click .handle': function(event, template) {
    template.$('.menu ul').toggleClass("showing");
  }
});
