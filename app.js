const express = require("express");
const app = express();

app.get("/", (req, res) => {
    //console.log(res);
    // res.send("Hello from the server");
    //res.status(200).send("Hello with a status of 200");
    res.status(200).json({
        message: "Hello",
        name: "Sena",
    });
});

app.post("/", (req, res) => {
    res.send("Hello from the server with a method of POST");
});

const port = 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});