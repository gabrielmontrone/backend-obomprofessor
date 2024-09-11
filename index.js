const express = require('express');
const cors = require('cors'); 
const geminiController = require('./controllers/geminiController');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.get('/', geminiController.helloWorld);
app.post('/generate', geminiController.generateContent);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
