const geminiService = require('../services/geminiService');

// Rota inicial
const helloWorld = (req, res) => {
  res.send('Hello, world!');
};

// Rota para gerar conteúdo
const generateContent = async (req, res) => {
  const { prompt } = req.body;
  
  try {
    const responseText = await geminiService.generateContent(prompt);
    res.json({ response: responseText });
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    res.status(500).json({ error: 'Erro ao gerar conteúdo' });
  }
};

module.exports = { helloWorld, generateContent };
