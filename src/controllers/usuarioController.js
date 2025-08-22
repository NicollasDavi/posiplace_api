const prisma = require('../prismaClient');

module.exports = {
  getAll: async (req, res) => {
    const data = await prisma.usuario.findMany({ include: { unidade: true, instituicao: true, solicitacoes: true } });
    res.json(data);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const data = await prisma.usuario.findUnique({ where: { id: parseInt(id) }, include: { unidade: true, instituicao: true, solicitacoes: true } });
    res.json(data);
  },
  create: async (req, res) => {
    const usuario = await prisma.usuario.create({ data: req.body });
    res.json(usuario);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const usuario = await prisma.usuario.update({ where: { id: parseInt(id) }, data: req.body });
    res.json(usuario);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await prisma.usuario.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Usuário deletado' });
  }
};
