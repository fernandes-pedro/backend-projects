import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory

server.post('/usuarios', (request, reply) => {
    const {nome, idade, nomeDaMae} = request.body

    database.create({
        nome,
        idade,
        nomeDaMae,
    })
    
    return reply.status(201).send()
})


server.get('/usuarios', (request) => {
    const search = request.query.search
    console.log(search)
    const usuarios = database.list(search)
    return usuarios 
})



server.put('/usuarios/:id', (request, reply) => {
    const usuarioID = request.params.id
    const {nome, idade, nomeDaMae} = request.body

    database.update(usuarioID, {
        nome, 
        idade, 
        nomeDaMae,
    })

    return reply.status(204).send()
})  


server.delete('/usuarios/:id',(request, reply)=> {
    const usuarioID = request.params.id
    database.delete(usuarioID)
    return reply.status(204).send()
})
server.listen({
    port:3333,
})