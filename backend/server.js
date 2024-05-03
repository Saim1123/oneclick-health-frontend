import express from 'express'
import mongoose from 'mongoose'

const app = express()

mongoose
    .connect("mongodb://127.0.0.1:27017/shifaam")
    .then(() => console.log("Connected to mongoDB..."))
    .catch(err => console.log("Error:", err.message))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home")
})

const port = 5000

app.listen(port, () => console.log(`Server is listening on port ${port}...`))