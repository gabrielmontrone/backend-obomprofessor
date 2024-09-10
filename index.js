const express = require('express');
const cors = require('cors'); 

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY); 
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
