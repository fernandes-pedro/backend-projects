import http from 'http'

const users = []

const server = http.createServer((req, res) => {
    const {method, url} = req
    
    if(method == 'GET' && url == '/users'){
        return res.end(users)
    }
    if(method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            name: 'Pedro Fernandes',
            email: 'pedrofernandes@example.com'
        })
        return res.end('Criacao de usuarios')
    }

    return res.end("hello world")
})

server.listen(3333)

