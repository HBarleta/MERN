//import express and store it in a variable
const express = require("express");

// initialize the express app and store it in a variable

const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

const menuItems = [
    {name:"Calamari", price: 12.00},
    {name:"Lobster", price: 15.00},
    {name:"Cajun Shrimp", price: 20.00},
    {name:"Crab Cakes", price: 24.00},
    {name:"Lasagna", price: 12.00}
]
// req is short hand for request
// res is short hand for response
// Create
app.post("/api/menu", (req, res) => {
    // res.json()
    menuItems.push(req.body)
    res.json({
        count: menuItems.length,
        results: menuItems
    })
})

// get all
app.get("/api/menu", (req, res) => {
    res.json({results : menuItems});
});
// get one
app.get("/api/menu/:idx", (req, res) => {
    res.json({results: menuItems[req.params.idx]});
});

// update
app.put("/api/menu/:idx", (req, res) => {
    menuItems[req.params.idx] = req.body;
    res.json({ count: menuItems.length, results: menuItems});
});

app.delete("api/menu/idx", (req, res) => {
    menuItems.splice(req.params.idx, 1);
    res.json({count: menuItems.length, results: menuItems});
})


app.listen(port, () => console.log(`Welcome to Death Star! You are on bridge port : ${port}`))