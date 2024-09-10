const express = require('express');
const cors = require('cors'); 

const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

const genAI = new GoogleGenerativeAI('AIzaSyAurUYYgZvKRHBquljQoWmy_lIlX3IveC0'); 
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;
    
    try {
        const result = await model.generateContent([prompt]);
        const responseText = result.response.text();
        res.json({ response: responseText });
    } catch (error) {
        console.error('Erro ao gerar conteúdo:', error);
        res.status(500).json({ error: 'Erro ao gerar conteúdo' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
