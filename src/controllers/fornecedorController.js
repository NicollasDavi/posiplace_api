const prisma = require('../prismaClient');

module.exports = {
  getAll: async (req, res) => {
    const fornecedores = await prisma.fornecedor.findMany();
    res.json(fornecedores);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const fornecedor = await prisma.fornecedor.findUnique({
      where: { id: parseInt(id) },
    });
    res.json(fornecedor);
  },

  create: async (req, res) => {
    const data = req.body;
    const fornecedor = await prisma.fornecedor.create({ data });
    res.json(fornecedor);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const fornecedor = await prisma.fornecedor.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(fornecedor);
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await prisma.fornecedor.delete({
      where: { id: parseInt(id) },
    });
    res.json({ message: 'Fornecedor deletado' });
  },
};
