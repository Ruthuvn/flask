const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.get("/", (req, res) => {
    res.render("index");
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