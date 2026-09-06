require('dotenv').config()
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

// middlewares -- 
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}))

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")


/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

// global error handler — must be defined AFTER all routes
app.use((err, req, res, next) => {
    console.error(err)
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong on the server."
    })
})

module.exports = app