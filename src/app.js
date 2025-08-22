const express = require('express');
const cors = require('cors');
const fornecedorRoutes = require('./routes/fornecedor');
const instituicaoRoutes = require('./routes/instituicao');
const unidadeRoutes = require('./routes/unidade');
const usuarioRoutes = require('./routes/usuario');
const solicitacaoRoutes = require('./routes/solicitacao');

const app = express();
app.use(cors());
app.use(express.json());

// rotas
app.use('/fornecedores', fornecedorRoutes);
app.use('/instituicoes', instituicaoRoutes);
app.use('/unidades', unidadeRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/solicitacoes', solicitacaoRoutes);

module.exports = app;
