
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000

app.use(cors({
    origin: ['http://localhost:5174'],
})
);

app.get("/", (req, res) => {
    res.send("Hallo Eline!")
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'hallo vanuit de API'})
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`);
});


