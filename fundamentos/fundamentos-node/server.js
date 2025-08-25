import {fastify} from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js';

//conexao com Banco de dados neon



//----------------------------------------------------------------------
const server = fastify()

// const database = new DatabaseMemory
const database = new DatabasePostgres()



server.post('/usuarios', async (request, reply) => {
    const {nome, idade, nome_da_mae} = request.body

    await database.create({
        nome,
        idade,
        nome_da_mae,
    })
    
    return reply.status(201).send()
})


server.get('/usuarios',  async (request) => {
    const search = request.query.search

    const usuarios = await database.list(search)
    
    return usuarios 
})



server.put('/usuarios/:id', async (request, reply) => {
    const usuarioID = request.params.id
    const {nome, idade, nome_da_mae} = request.body

    await database.update(usuarioID, { nome, idade, nome_da_mae });


    return reply.status(204).send()
})  


server.delete('/usuarios/:id', async (request, reply)=> {
    const usuarioID = request.params.id
    await database.delete(usuarioID)
    return reply.status(204).send()
})
server.listen({
    port:3333,
})