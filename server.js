const express = require("express")
const path = require("path")

const app = express();

// middleware to serve the static directory
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
});

app.listen(process.env.PORT || 2121, () => console.log("Server is here to stay!"));