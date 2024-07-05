const mongoose = require("mongoose")

const dailyTaskSchema = mongoose.Schema({
    task: {type: String, required: true},
})

const dailyTaskModel = mongoose.model("DailyTask",dailyTaskSchema);

module.exports ={
    dailyTaskModel,
};