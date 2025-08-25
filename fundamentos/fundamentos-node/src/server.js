import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import http from "http";
import sql from "./db.js";

//conexao com Banco de dados neon
const requestHandler = async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    const { version } = result[0];

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Connected to Neon!\nVersion: ${version}`);
  } catch (err) {
    console.error("Erro ao conectar ao Neon:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Erro interno no servidor");
  }
};

http.createServer(requestHandler).listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

//----------------------------------------------------------------------
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