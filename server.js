const express = require("express");

const app = express();

app.get("/", (req, res) => {
    // res.send("Hello from the server");
    res.status(200).json({
        name: "Sena",
        number: "1234",
    });
});
// app.post("/", (req, res) => {
//     res.send("Hello from the server with method of Post");
// });

const port = 3001;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});