const express = require("express")

const app = express();

app.get('/check', (req, res) => {
    res.send("App listening");
})


app.listen(5000, () => {
    console.log("App listening at port 5000");
})