// server kurulumu burada olacak.
const app = require("./app");
const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});