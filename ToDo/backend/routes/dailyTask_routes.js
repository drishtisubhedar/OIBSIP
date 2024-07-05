const express = require("express")
const { dailyTaskModel } = require("../models/dailyTaskModel")
const dailyTaskRouter = express.Router()

//for reading task
dailyTaskRouter.get("/dailytask", async(req, res) =>{
    const data = await dailyTaskModel.find({})
    console.log('Fetched tasks:', data);
    res.json({success: true, data: data})
})

//create or add task
dailyTaskRouter.post("/dailytaskcreate", async(req, res) =>{
    console.log(req.body)
    const data = new dailyTaskModel({
        task: req.body.task,
    })
    await data.save()
    res.send({
        success: true, message: "ToDo created successfully"
    })
})

//to update tasks
dailyTaskRouter.put("/update/:id", async (req, res) => {
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
dailyTaskRouter.delete("/delete/:id", async (req, res) => {
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
    dailyTaskRouter,
};