//padrao de importacao CommonJS (usando require)
// const http = require('http')
//Para utilzar ESModules (usando import/export) necessita de alteracao no package.json pois o node nao suporta por padrao
import http from 'http'

//criacao de rotas (caminhos para executar acoes [funcoes] na aplicacao)
// rota para adicionar
// rota para listar
// rota para atualizar
// rota para excluir

// HTTP
// --> metodo HTTP
// --> URL

// GET, POST, PUT, PATCH, DELETE

// GET --> buscar um recurso do back-end
// POST --> criar um recurso no back-end
// PUT --> Atualizar um recurso no back-end
// PATCH --> Atualizar uma informacao especifica de um recurso no back-end
// DELETE --> Excluir um recurso do back-end

// GET/users (buscando usuario no back-end)
// POST/users (criando usuario no back-end)

//SALVANDO INFORMACAO NA MEMORIA
//Stateful --> Comporta-se de forma diferente baseada nas informacoes salvas (local)
//Stateless --> Nao se altera devido ao salvamento externo de dados (database, json, etc)

const users = []

//criando servidor http (req e res [require, response ] -> solicitar e devolver info)
const server = http.createServer((req, res) => {
    //criando requisicao (confirmado pelo /get)
    const {method, url} = req
    if(method == 'GET' && url == '/users'){
        return res.end('Listagem de usuarios')
    }
    if(method == 'POST' && url == '/users'){
        //enviando informacao com push
        users.push({
            id: 1,
            name: 'Pedro Fernandes',
            email: 'pedrofernandes@example.com'
        })
        return res.end('Criacao de usuarios')
    }

    return res.end("hello ignite")
})


//definindo porta do localhost
server.listen(3333)

//aplicando node watch (equivalente ao autosave para atualizar conforme alteracoes no codigo)
//terminal --> node --watch src/server.js
