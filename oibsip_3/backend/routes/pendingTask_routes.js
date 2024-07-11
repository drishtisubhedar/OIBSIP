const express = require("express")
const { pendingTaskModel } = require("../models/pendingTaskModel")
const pendingTaskRouter = express.Router()

// for reading pending task
pendingTaskRouter.get("/pendingtask", async(req, res) =>{
    const data = await pendingTaskModel.find({})
    res.json({success: true, data: data})
})

//create or add pending task
pendingTaskRouter.post("/pendingtaskcreate", async(req, res) =>{
    console.log(req.body)
    const data = new pendingTaskModel({
        task: req.body.task,
    })
    await data.save()
    res.send({
        success: true, message: "Pending Task"
    })
})

//to update tasks
pendingTaskRouter.put("/pendingtask/update/:id", async (req, res) => {
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
pendingTaskRouter.delete("/pendingtask/delete/:id", async (req, res) => {
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
    pendingTaskRouter,
}