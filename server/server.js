Meteor.startup(function() {
	var scores = Scores.find();
	console.log('data: ' + scores.count());
	var teams = ['Rocket', 'Plasma', 'Galactic', 'Magma', 'Aqua'];
	if (scores.count() === 0) {
		for (var i=0; i<5; i++) {
			Scores.insert({
				team : "Team " + teams[i],
				score : Math.floor(Math.random() * 20),
				ts : +new Date
			});
		}
	}

	Meteor.setInterval(function() {
		var score = Scores.findOne({}, {sort: {ts: 1}});
		console.log(score._id);
		Scores.update({_id: score._id}, {$set: { ts: +new Date }});
	}, 3500);
});