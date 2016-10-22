import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './board.html';

Template.newsfeed.helpers({
  'getUpdates' : function()
  {
    return Statuses.find({}, {sort : {when : -1}, limit : 3});
  }
})

Template.scoreboard.helpers({

  'getScores' : function()
  {
  	return Houses.find({}, {sort : {points : -1, name : 1}});
  },
  'selectedClass' : function()
  {
    let houseId = this._id;
    let selectedHouse = Session.get('selectedHouse');
    if (houseId == selectedHouse)
      return "selected";
  } 
});

Template.scoreboard.events({
  'click .houseName' : function()
  {
    let houseId = this._id;
    Session.set('selectedHouse', houseId);
  },
  'click .btn-gryffindor': function(event)
  {
  	let currentHouseId = Houses.findOne({name : "Gryffindor"})._id;
    Houses.update({_id : currentHouseId}, {$inc : {points : 5}});
  },
  'click .btn-ravenclaw': function(event)
  {
  	let currentHouseId = Houses.findOne({name : "Ravenclaw"})._id;
    Houses.update({_id : currentHouseId}, {$inc : {points : 5}});
  },
  'click .btn-hufflepuff': function(event)
  {
  	let currentHouseId = Houses.findOne({name : "Hufflepuff"})._id;
    Houses.update({_id : currentHouseId}, {$inc : {points : 5}});
  },
  'click .btn-slytherin': function(event)
  {
  	let currentHouseId = Houses.findOne({name : "Slytherin"})._id;
    Houses.update({_id : currentHouseId}, {$inc : {points : 5}});
  }
});

Template.statusUpdate.events({
  'submit form' : function(event)
  {
    event.preventDefault();
    let status = $('[name="statusUpdate"]').val();
    if (status.trim().length != 0)
      Statuses.insert({info : status, when : (new Date())});
    $('[name="statusUpdate"]').val('');
  }
})

