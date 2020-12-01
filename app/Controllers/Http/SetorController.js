const Setor = use('App/Models/Setor');

class SetorController {
  async getAll() {
    const setores = await Setor.all();
    return setores;
  }

  async get({ params }) {
    const setor = await Setor.findOrFail(params.id);
    return setor;
  }

  async update({ request, params }) {
    const { nome } = request.all();
    const setor = await Setor.findOrFail(params.id);
    setor.nome = nome;
    setor.save();
    return setor;
  }

  async remove({ params }) {
    const setor = await Setor.findOrFail(params.id);
    await setor.delete();
  }
}

module.exports = SetorController;
