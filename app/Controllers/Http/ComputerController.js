const Computer = use('App/Models/Computer');

class ComputerController {
  async getAll() {
    const computers = await Computer.all();
    return computers;
  }

  async get({ params }) {
    const computer = await Computer.findOrFail(params.id);
    return computer;
  }

  async create({ request, auth }) {
    const data = request.only(['tombamento', 'descricao', 'status']);
    data.user_id = auth.user.id;
    const computer = await Computer.create(data);
    return computer;
  }

  async update({ request, params }) {
    const data = request.only(['descricao', 'status', 'user_id']);
    const computer = await Computer.findOrFail(params.id);
    computer.descricao = data.descricao;
    computer.status = data.status;
    if (data.user_id) {
      computer.user_id = data.user_id;
    }
    computer.save();
    return computer;
  }

  async remove({ params }) {
    const computer = await Computer.findOrFail(params.id);
    await computer.delete();
  }
}

module.exports = ComputerController;
