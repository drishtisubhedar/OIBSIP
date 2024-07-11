require('dotenv').config();
const express = require("express");
const cors = require("cors");
const authRouter = require('./routes/auth_route');
const mongoose = require("mongoose");

const app = express();

const mongoURL = process.env.mongoURL;

// MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // serverSelectionTimeoutMS: 5000, // Increase this value if needed
    // socketTimeoutMS: 45000 // Increase this value if needed
}).then(() => {
    console.log('DB connection successful!');
}).catch((err) => {
    console.error('DB connection error:', err);
});

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

// Server
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({
        message: "API is working now"
    });
});

app.listen(PORT, async () => {
    console.log("Server running");
    console.log(`Example app listening on port http://localhost:${PORT}`);
});
