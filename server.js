const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1.  Login Page (auth.html) dikhana ka liya
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'auth.html'));
});

// 2. Jab login ho jaye toh index.html par janay ka liya
app.get('/store', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. CSS aur JS files ko server tak pohnchane ka liya
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});