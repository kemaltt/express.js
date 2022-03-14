const fs = require("fs");

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`));

exports.checkID = (req, res, next, val) => {
    if (val > tours.length) {
        return res.status(404).json({
            status: "fail",
            message: "invalid id",
        });
    }
    next();
};

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: "fail",
            message: "Missing name or price",
        });
    }
    next();
};

exports.getAlltours = (req, res) => {
    res.status(200).json({
        status: "success",
        result: tours.length,
        data: {
            tours: tours,
        },
    });
};

exports.createTour = (req, res) => {
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
};

exports.getTour = (req, res) => {
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
};

exports.updateTour = (req, res) => {
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
};

exports.deleteTour = (req, res) => {
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
};