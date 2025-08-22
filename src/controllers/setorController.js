const prisma = require('../prismaClient');

exports.getSetores = async (req, res) => {
  const setores = await prisma.setor.findMany({ include: { usuarios: true } });
  res.json(setores);
};

exports.createSetor = async (req, res) => {
  const data = req.body;
  const setor = await prisma.setor.create({ data });
  res.json(setor);
};

exports.updateSetor = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const setor = await prisma.setor.update({ where: { id: Number(id) }, data });
  res.json(setor);
};

exports.deleteSetor = async (req, res) => {
  const { id } = req.params;
  await prisma.setor.delete({ where: { id: Number(id) } });
  res.json({ message: "Setor deletado" });
};
