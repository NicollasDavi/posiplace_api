const prisma = require('../prismaClient');

exports.getItens = async (req, res) => {
  const itens = await prisma.fornecedorItem.findMany({
    include: { fornecedor: true, avaliacoes: true },
  });
  
  res.json(itens);
};

exports.createItem = async (req, res) => {
  const data = req.body;
  const item = await prisma.fornecedorItem.create({ data });
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const item = await prisma.fornecedorItem.update({
    where: { id: Number(id) },
    data,
  });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await prisma.fornecedorItem.delete({ where: { id: Number(id) } });
  res.json({ message: "Item deletado" });
};
