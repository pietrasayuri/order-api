# Order API

API simples desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose

## Instalação

Clone o repositório:

git clone https://github.com/pietrasayuri/order-api.git

Entre na pasta do projeto:

cd order-api

Instale as dependências:

npm install

Execute o projeto:

npm run dev

O servidor iniciará em:

http://localhost:3000

## Endpoints

Criar pedido

POST /order

Buscar pedido por número

GET /order/:orderId

Listar todos os pedidos

GET /order/list

Atualizar pedido

PUT /order/:orderId

Deletar pedido

DELETE /order/:orderId

## Exemplo de request

POST /order

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2026-03-06",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
