//server kurulumu 

const app = require('./app')

const PORT = process.env.PORT || 8001

app.listen(PORT, (req, res) => {
    console.log(`App listening on port ${PORT}`);
})