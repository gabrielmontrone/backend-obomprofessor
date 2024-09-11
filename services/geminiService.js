const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.apiKEY); 
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generateContent = async (prompt) => {
  try {
    const result = await model.generateContent([prompt]);
    return result.response.text();
  } catch (error) {
    throw new Error('Erro ao gerar conteúdo');
  }
};

module.exports = { generateContent };
