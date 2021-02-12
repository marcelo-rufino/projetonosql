const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//criação da minha tabela Produtos

const Produtos = new Schema({
    categoria:{
        type:String,
        required:true,
    },
    descricao:{
        type:String,
        required:true,
    },
    imagem:{
        type:String,
        required:true,
    },
    preco:{
        type:Number,
        required:true,
    }
}) 

mongoose.model ("produtos", Produtos);
