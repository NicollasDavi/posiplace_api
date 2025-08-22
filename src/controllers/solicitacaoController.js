const prisma = require('../prismaClient');
exports.getSolicitacoes = async (req, res) => {
  const solicitacoes = await prisma.solicitacao.findMany({
    include: { usuario: true, unidade: true, setor: true, fornecedor: true, item: true },
  });
  res.json(solicitacoes);
};

exports.createSolicitacao = async (req, res) => {
  const data = req.body;

  // calcular percentual de verba do setor
  const setor = await prisma.setor.findUnique({ where: { id: data.setorId } });
  if (setor) {
    data.percentualVerba = (data.valorTotal / setor.verba) * 100;
  }

  const solicitacao = await prisma.solicitacao.create({ data });
  res.json(solicitacao);
};

exports.updateSolicitacao = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const solicitacao = await prisma.solicitacao.update({ where: { id: Number(id) }, data });
  res.json(solicitacao);
};
