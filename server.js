// Aqui é onde meu servidor inicializa para rodar a API (aqui dentro) 

import app from "./src/app.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

