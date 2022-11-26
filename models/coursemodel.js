const mongoose=require('mongoose');


const courseSchema= mongoose.Schema({
    title:{type:string,required:true},
    description:{type:string,required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true}

});

module.exports = mongoose.model('course',courseSchema);

