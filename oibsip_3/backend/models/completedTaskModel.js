const mongoose = require("mongoose")

const completedTaskSchema = mongoose.Schema({
    task: {type: String, required: true},
})

const completedTaskModel = mongoose.model("CompletedTask",completedTaskSchema);

module.exports = {
    completedTaskModel,
};