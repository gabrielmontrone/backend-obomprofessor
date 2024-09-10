const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai'); // Apenas se for usar a API do Gemini
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Para interpretar JSON no corpo da requisição

// Rota para verificar a conexão
app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

// Configuração da API do Gemini
const genAI = new GoogleGenerativeAI('AIzaSyAurUYYgZvKRHBquljQoWmy_lIlX3IveC0');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.post('/', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).send('Prompt é necessário');
  }

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();
    res.json({ response: responseText });
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).send('Erro ao gerar a resposta.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
