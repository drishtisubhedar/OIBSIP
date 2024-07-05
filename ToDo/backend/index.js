const express = require("express")
const cors = require("cors")
const { connection } = require("./db")

const app =express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

//Daily task creation
const { dailyTaskRouter } = require("./routes/dailyTask_routes")
app.use(dailyTaskRouter)

//Completed task
const { completedTaskRouter } = require("./routes/completedTask_routes")
app.use(completedTaskRouter)

//Pending task
const { pendingTaskRouter } = require("./routes/pendingTask_routes")
app.use(pendingTaskRouter)

app.get('/', (req, res) => {
    res.send({
        message: "api is working now"
    })
})

console.log("Connected to DB")
    app.listen(PORT,async()=>{
        console.log("Server running")
        console.log(`Example app listening on port http://localhost:${PORT}`)
    })