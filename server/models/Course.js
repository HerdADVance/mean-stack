var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
	title: {type:String, required:'(PATH) is required!'},
	featured: {type:Boolean, required:'(PATH) is required!'},
	published: {type:Date, required:'(PATH) is required!'},
	tags: [String],
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
	Course.find({}).exec(function(err, collection){
		if(collection.length === 10){
			Course.create({title: 'ABC', featured:true, published:new Date('3/1/2015'), tags:['C#']});
			Course.create({title: 'BCD', featured:true, published:new Date('2/1/2015'), tags:['C#']});
			Course.create({title: 'CDE', featured:true, published:new Date('5/1/2015'), tags:['C#']});
			Course.create({title: 'DEF', featured:true, published:new Date('1/1/2015'), tags:['C#']});
			Course.create({title: 'EFG', featured:true, published:new Date('4/1/2015'), tags:['C#']});
		}
	})
}

exports.createDefaultCourses = createDefaultCourses;