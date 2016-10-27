import { Meteor } from 'meteor/meteor';
var database = new MongoInternals.RemoteCollectionDriver("mongodb://127.0.0.1:27017/pdxcan");
Markers = new Mongo.Collection('markers', {_driver: database});
Meteor.startup(() => {
  // code to run on server at startup
});
