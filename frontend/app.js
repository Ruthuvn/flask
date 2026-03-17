const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML directly
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.ejs"));

});

app.post("/submit", async (req, res) => {

    const formData = {
        name: req.body.name,
        password: req.body.password
    };

    try {
    const response = await axios.post(
        "http://localhost:9000/submit",
        formData
    );

    res.send(response.data);

} catch (error) {

    console.log(error.message);
    res.send("Error connecting to backend");

}

});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});