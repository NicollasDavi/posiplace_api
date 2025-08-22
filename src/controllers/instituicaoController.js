const prisma = require('../prismaClient');

module.exports = {
  getAll: async (req, res) => {
    const data = await prisma.instituicao.findMany({ include: { unidades: true, usuarios: true } });
    res.json(data);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const data = await prisma.instituicao.findUnique({ where: { id: parseInt(id) }, include: { unidades: true, usuarios: true } });
    res.json(data);
  },
  create: async (req, res) => {
    const instituicao = await prisma.instituicao.create({ data: req.body });
    res.json(instituicao);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const instituicao = await prisma.instituicao.update({ where: { id: parseInt(id) }, data: req.body });
    res.json(instituicao);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await prisma.instituicao.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Instituição deletada' });
  }
};
