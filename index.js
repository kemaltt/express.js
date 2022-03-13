const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json()); //middleware =>req.body yi yakalayabilme için

//-------GET-POST------------------------------------------------------------------

app.get("/", (req, res) => {
    console.log("Hello from server side");
    res.status(200).json({ message: "Hello" });
});

app.post("/", (req, res) => {
    console.log("Hello from server side");
    res.status(200).json({ message: "Hello with a method from Post" });
});

//----------DATA--------------------------------------
const tours = JSON.parse(fs.readFileSync(`${__dirname}/data/tours.json`));

app.get("/api/v1/tours", (req, res) => {
    res.status(200).json({
        status: "success",
        result: tours.length,
        data: {
            tours: tours,
        },
    });
});

//data ya yeni tour ekleme ( POST)----

app.post("/api/v1/tours", (req, res) => {
    console.log(req.body);

    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);

    fs.writeFile(`${__dirname}/data/tours.json`, JSON.stringify(tours), (err) => {
        res.status(200).json({
            status: "success",
            data: {
                tour: newTour,
            },
        });
    });
});

// id ile bilgi getirme-------------------
app.get("/api/v1/tours/:id", (req, res) => {
    console.log(req.params);

    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id == id);

    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "invalid id",
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            tour,
        },
    });
});

//Update--Patch---------------------------------
app.patch("/api/v1/tours/:id", (req, res) => {
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "invalid id",
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            tour: "Update data will be here...",
        },
    });
});

//Delete--------
app.patch("/api/v1/tours/:id", (req, res) => {
    const id = req.params.id * 1;

    if (id > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "invalid id",
        });
    }

    res.status(204).json({
        status: "success",
        data: null,
    });
});

const port = 8001;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});