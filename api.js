const express = require("express")

const app = express()
app.use(express.json())
app.get("/skills", (req, res) => {
    return res.json({})
})

app.listen(8000, () => {
    console.log("rrr")
})