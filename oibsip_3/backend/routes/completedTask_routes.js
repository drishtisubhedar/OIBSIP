const express = require("express")
const { completedTaskModel } = require("../models/completedTaskModel")
const completedTaskRouter = express.Router()

// for reading Completed task
completedTaskRouter.get("/completedtask", async(req, res) =>{
    const data = await completedTaskModel.find({})
    res.json({success: true, data: data})
})

//create or add completed task
completedTaskRouter.post("/completedtaskcreate", async(req, res) =>{
    console.log(req.body)
    const data = new completedTaskModel({
        task: req.body.task,
    })
    await data.save()
    res.send({
        success: true, message: "ToDo completed"
    })
})

//to update tasks
completedTaskRouter.put("/completedtask/update/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedTask = await dailyTaskModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, message: "Task updated successfully", data: updatedTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

//to delete tasks
completedTaskRouter.delete("/completedtask/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTask = await dailyTaskModel.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }
        res.status(200).json({ success: true, message: "Task deleted successfully", data: deletedTask });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = {
    completedTaskRouter,
}