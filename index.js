const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint para gerar o conteúdo
app.post('/generate', async (req, res) => {
    const { prompt } = req.body;

    // Aqui você deve integrar com o modelo de IA ou serviço que gera o conteúdo
    // Este é um exemplo fictício
    try {
        // Substitua o código abaixo pela chamada real ao serviço de IA
        const generatedText = `Texto gerado com base no prompt: ${prompt}`;
        
        res.json({ generatedText });
    } catch (error) {
        console.error('Erro ao gerar conteúdo:', error);
        res.status(500).json({ error: 'Erro ao gerar a resposta. Por favor, tente novamente.' });
    }
});

// Rota padrão
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
