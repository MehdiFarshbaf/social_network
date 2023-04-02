import express from 'express'
import connectDB from "./config/database/db.js";

const app = new express()

connectDB()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`))