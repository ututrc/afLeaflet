// Define the custom input type
AutoForm.addInputType("leaflet", {
  template: "afLeaflet",

  valueIn: function(value) {
    return value;
  },

  valueOut: function() {
    return this.context.value;
  },

  //Sanitize the context as an object
  contextAdjust: function(context) {
    context.lat = context.value.split(",")[0];
    context.lng = context.value.split(",")[1];
    context.identifier = context.name.replace(".", "-");
    return context;
  }
});
