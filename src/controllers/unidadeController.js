const prisma = require('../prismaClient');

module.exports = {
  getAll: async (req, res) => {
    const data = await prisma.unidade.findMany({ include: { usuarios: true, solicitacoes: true } });
    res.json(data);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const data = await prisma.unidade.findUnique({ where: { id: parseInt(id) }, include: { usuarios: true, solicitacoes: true } });
    res.json(data);
  },
  create: async (req, res) => {
    const unidade = await prisma.unidade.create({ data: req.body });
    res.json(unidade);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const unidade = await prisma.unidade.update({ where: { id: parseInt(id) }, data: req.body });
    res.json(unidade);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await prisma.unidade.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Unidade deletada' });
  }
};
