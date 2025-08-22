import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory'

const server = fastify()


//rota de criacao
server.post('/usuario', () => {
    return 'criacao de usuario'
})

//rota de busca
server.get('/usuario', () => {
    return 'busca de usuario'
})

//rota de insercao de dados
server.put('/usuario/:id', () => {
    return 'insercao de id'
})  

//rota de exclusao
server.delete('/usuario/:id',()=> {

})
server.listen({
    port:3333,
})