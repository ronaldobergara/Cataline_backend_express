import express, { response } from "express";

const app = express()

app.use(express.json())

// Métodos HTTP -> GET | POST | PUT | DELETE

//http://localhost:3333/users

// request  = requisição
// response = retorno de uma resposta para o front end por exemplo


app.get('/users', (request, response) => {

    const {perPage, page} = request.query

    console.log(perPage)
    console.log(page)

    return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users', (request, response) => {
    const body = request.body

    console.log(body)

    return response.json({ message: 'Criando usuário' })
})

app.put('/users/:id', (request, response) => {
    const { id } = request.params

    console.log(id)

    return response.json({ message: 'Atualizando usuário'})
})

app.delete('/users', (request, response) => {
    return response.json({ message: 'Excluindo usuário' })
})

app.listen('3333', () => {
    console.log('Back-end Started!')
})