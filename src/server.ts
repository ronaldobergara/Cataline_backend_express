import express, { response } from "express";

const app = express()

// Métodos HTTP -> GET | POST | PUT | DELETE

//http://localhost:3333/users

// request  = requisição
// response = retorno de uma resposta para o front end por exemplo

app.get('/users', (request, response) => {
    return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users', (request, response) => {
    return response.json({ message: 'Criando usuário' })
})

app.put('/users', (request, response) => {
    return response.json({ message: 'Atualizando usuário'})
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Excluindo usuário' })
})

app.listen('3333', () => {
    console.log('Back-end Started!')
})