var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required!'},
    featured: {type: String, required: '{PATH} is required!'},
    published: {type: String, required: '{PATH} is required!'},
    tags: {type: String, required: '{PATH} is required!'}
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            Course.create({title: "JavaScript for beginners", featured: true, published: new Date(2014,1,8), tags: ['JS']});
            Course.create({title: "Intermediate JavaScript", featured: true, published: new Date(2013,1,10), tags: ['JS']});
            Course.create({title: "Advanced JavaScript", featured: true, published: new Date(2012,7,20), tags: ['JS']});
            Course.create({title: "Easy Java", featured: true, published: new Date(2011,4,22), tags: ['Java']});
            Course.create({title: "Java Hacks", featured: true, published: new Date(2010,5,15), tags: ['Java']});
            Course.create({title: "Java for experts", featured: true, published: new Date(2009,7,27), tags: ['Java']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;