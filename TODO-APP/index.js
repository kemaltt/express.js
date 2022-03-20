const app = require('./app')

const PORT = process.env.PORT || 8000

app.listen(PORT, (req, res) => {
    console.log(`Server is alive on port ${PORT}`);
})