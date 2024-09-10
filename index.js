const express = require('express');
const cors = require('cors'); // Importando o middleware CORS
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Adiciona o middleware CORS para permitir requisições de diferentes origens

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
