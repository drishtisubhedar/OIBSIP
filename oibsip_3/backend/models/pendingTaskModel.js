const mongoose = require("mongoose")

const pendingTaskSchema = mongoose.Schema({
    task: {type: String, required: true},
})

const pendingTaskModel = mongoose.model("PendingTask",pendingTaskSchema);

module.exports = {
    pendingTaskModel,
};