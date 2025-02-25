const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5500;

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../frontend')));


const menuData = {
    "Hot Beverages": [
        { name: "Espresso", price: 60 },
        { name: "Cappuccino", price: 55 }
    ],
    "Cold Beverages": [
        { name: "Iced Latte", price: 50 },
        { name: "Iced Mocha", price: 55 }
    ],
    "Pastries": [
        { name: "Croissant", price: 40 },
        { name: "Muffin", price: 35 }
    ]
};

// API route for menu categories
app.get('/menu', (req, res) => {
    res.json(Object.keys(menuData)); 
});

app.get('/menu/:category', (req, res) => {
    const category = req.params.category;
    res.json(menuData[category] || []); 
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
});