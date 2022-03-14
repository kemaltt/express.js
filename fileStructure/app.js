// express ile alakalı işlemler..
const express = require("express");
const toursRoute = require("./routes/tourRoutes");

const app = express();

app.use(express.json());
app.use("/api/v1/tours", toursRoute);
// app.use('/api/v1/users', usersRoute)
// app.use('/api/v1/admin', adminRoute)

module.exports = app;