const express = require('express');
const routes = express.Router();
const mongoose = require("mongoose");
require("./src/db/conexao");//Minha conexão com bd

//model
require("./src/models/Produtos");
const Produtos = mongoose.model("produtos");

// produtos
routes.get('/', async (req,res) =>  {
    const Mostrar = await Produtos.find();
    const Mostrarjson = await Mostrar;
    res.json(Mostrarjson)
})

 
//só necessito do get, porém utilizei o post para inserir os produtos no banco de dados Nosql
routes.post('/produtos', (req,res) => {
    const inserindoProduto = new Produtos ({
        categoria:req.body.categoria,
        descricao:req.body.descricao,
        imagem:req.body.imagem,
        preco:req.body.preco
    })
    inserindoProduto.save();
    res.json({
        message:"Usuário cadastrado com sucesso",
        produto:inserindoProduto
    })
})

module.exports = routes;
