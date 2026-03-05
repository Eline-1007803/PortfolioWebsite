
const express = require('express');
const cors = require('cors');
const Queries = require('./models/queries')
const app = express();

const PORT = 3000

app.use(cors({
    origin: ['http://localhost:5173', "http://localhost:5174"],
})
);
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hallo Eline!")
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'hallo vanuit de API'})
})

app.post('/contact', async(req, res) => {
    const { fname, lname, email, phonenumber, subject, message } = req.body
    await Queries.postContactInfo( fname, lname, email, phonenumber, subject, message)
    res.json('Thank you for your message!')
})

app.get('/products', async(req, res) => {
    const products = await Queries.getAllProducts();
    res.json(products)
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


