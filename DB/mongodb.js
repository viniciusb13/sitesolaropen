const mongoose = require('mongoose');
require('dotenv').config(); // Certifique-se de carregar as variáveis de ambiente

mongoose.connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true, // Recomendado para lidar com strings de conexão
    useUnifiedTopology: true // Para um driver de conexão mais estável
})
.then(() => {
    console.log('Conectado ao MongoDB Atlas com sucesso!');
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB Atlas:', err.message);
    process.exit(1); // Encerra o processo em caso de falha crítica
});
