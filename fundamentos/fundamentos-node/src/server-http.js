import {createServer} from 'http'

const server = createServer((request, response) => {
    console.log('ola console')
    response.write('ola usuario')
    return response.end()
})

server.listen(3333)