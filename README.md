# 📡 Wishlist API

![Nodejs](https://img.shields.io/badge/-Node.js-333333?style=for-the-badge&logo=nodedotjs)&nbsp;
![Typescript](https://img.shields.io/badge/-Typescript-333333?style=for-the-badge&logo=typescript)&nbsp;
![Express](https://img.shields.io/badge/-Express.js-333333?style=for-the-badge&logo=express)&nbsp;
![Zod](https://img.shields.io/badge/-Zod-333333?style=for-the-badge&logo=zod)&nbsp;
![MongoDB](https://img.shields.io/badge/-MongoDB-333333?style=for-the-badge&logo=mongodb)&nbsp;
![Insomnia](https://img.shields.io/badge/-Insomnia-333333?style=for-the-badge&logo=insomnia&logoColor=6A5ACD)&nbsp;
![Swagger](https://img.shields.io/badge/-Swagger-333333?style=for-the-badge&logo=swagger)&nbsp;

Este projeto é uma API construída usando **Node.js, TypeScript, Express.js, Zod, MongoDB como banco de dados e Swagger para documentação.**

## 🔍 Índices

- [Instalação](#Instalação)
- [Configuração](#configuração)
- [Como usar](#como-usar)
- [API Endpoints](#api-endpoints)
- [Banco de dados](#banco-de-dados)
- [Contribuição](#contribuição)

## 📃 Documentação

A documentação detalhada da API está disponível no Swagger. Para acessar, vá para [Wishlist API]().

## 📨 API Endpoints
A API fornece os seguintes endpoints:

```markdown
GET /api/wishlist - Resgata uma lista de todos os produtos.

POST /api/wishlist - Registre um novo produto.

GET /api/wishlist/:id - Obtém detalhes de um item específico.

PUT /api/wishlist/:id - Atualiza as informações de um produto existente.

DELETE /api/wishlist/:id - Apaga um produto existente.
```

## 🗄️ Banco de dados
O projeto utiliza [MongoDB](https://www.mongodb.com/pt-br) como banco de dados. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.

## ⚙️ Installation

1. Clone o repositório:

```bash
git clone https://github.com/drewcosta/wishlist-api.git
```

2. Instale as dependências:

```bash
npm install
```

3. Configura as variáveis de ambientes.

## 📝 Como usar

1. Execute o servidor:
```bash
npm run dev
```
2. A API estará acessível em: http://localhost:{PORT}

## 💻 Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, abra um problema ou envie uma solicitação pull ao repositório.

Ao contribuir para este projeto, siga o estilo de código existente, [convenções de commit](https://www.conventionalcommits.org/en/v1.0.0/), e envie suas alterações em um branch separado.
