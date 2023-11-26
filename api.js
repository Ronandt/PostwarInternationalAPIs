const express = require("express")

const app = express()
app.use(express.json())
app.route("skills", (req, res) => {
    return res.json({})
})