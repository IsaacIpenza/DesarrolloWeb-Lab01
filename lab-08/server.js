var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

var waitingList = []

// Routes ==========================================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Display tables and waiting list
app.get("/api/tables", (req, res) => {
    return res.json(tables);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitingList);
});

// Add table
app.post("/api/tables", (req, res) => {
    
    var newTable = req.body;
    console.log(newTable);

    if(tables.length < 5 ){
        tables.push(newTable);
        res.send(true)
    } else {
        waitingList.push(newTable);
        res.send(false)
    }

    // res.json(newTable);
});

// Delete all tables
app.post("/api/clear", (req,res) => {
    tables.splice(0, tables.length);
    waitingList.splice(0, waitingList.length);
});

// Starts the server =================================================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});