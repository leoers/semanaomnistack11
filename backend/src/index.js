const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json()); // Para converter em json

app.use(routes);
 /*


Rota = este serve para criar a rota, a barra é somente para ficar na parte raiz, se quiser para pagina especifica fica '/pagina'

    Metodos http:
    GET: Buscar uma informação do back-end
    Post: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    Delete: Deletar uma informação no back-end
 */

 /*
Tipos de parametros:
    Query Params: Parâmetros nomeados na rota após *?* (filtros, paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/*
Driver: Select * From users
Query Builder: table('users').select('*').where()
*/




app.listen(3333);
