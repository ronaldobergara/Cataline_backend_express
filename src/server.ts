import express, { response } from "express";
import { v4 as uuid } from "uuid";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

// Métodos HTTP -> GET | POST | PUT | DELETE

//http://localhost:3333/users

// request  = requisição
// response = retorno de uma resposta para o front end por exemplo

// como não estamos utilizando banco de dados vamos criar um array para guardar as informações
// Como estamos utilizando typeScript vamos criar uma interface
interface User {
  id: string;
  name: string;
  email: string;
}
const users: User[] = [];

// Na rota de POST para criar os usuarios de ID único vamos utilizar uma biblioteca a uuid
// vamos instalar em modo de desenvolvimento e importa-la
// npm install uuid
// npm install @types/uuid -D

app.get("/users", (request, response) => {
  // retorna a lista de users
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, email } = request.body;

  const user = { id: uuid(), name, email };

  users.push(user);

  return response.json(user);
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const { name, email } = request.body;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) {
    return response.status(404).json({ erro: "Usuario não encontrado." });
  }

  const user = { id, name, email };
  users[userIndex] = user;

  return response.json(user);
});

app.delete("/users/:id", (request, response) => {
  const { id } = request.params;

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex < 0) {
    return response.status(404).json({ erro: "Usuario não encontrado." });
  }

  users.splice(userIndex, 1);

  return response.status(204).send();
});

app.listen("3333", () => {
  console.log("Back-end Started!");
});
