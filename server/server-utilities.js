import { Meteor } from 'meteor/meteor';

Meteor.startup(() => 
{
	if (Houses.find().count() == 0)
	{
		Houses.insert(
		{
			name : "Gryffindor",
			points : 0
		});
		Houses.insert(
		{
			name : "Ravenclaw",
			points : 0
		});
		Houses.insert(
		{
			name : "Slytherin",
			points : 0
		});
		Houses.insert(
		{
			name : "Hufflepuff",
			points : 0
		});
	}

});

