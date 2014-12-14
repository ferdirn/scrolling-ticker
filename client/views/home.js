Template.home.helpers({
	scoreList : function() {
		return Scores.find({}, {sort: {ts: -1}});
	},
	firstScore : function() {
		return Scores.findOne({}, {sort: {ts: -1}});
	}
});