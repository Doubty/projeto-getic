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

  async create({ request }) {
    const data = request.only(['tombamento', 'status', 'user_id']);
    const computer = await Computer.create(data);
    return computer;
  }

  async update({ request, params }) {
    const { status, user_id } = request.all();
    const computer = await Computer.findOrFail(params.id);
    computer.status = status;
    computer.user_id = user_id;
    computer.save();
    return computer;
  }

  async remove({ params }) {
    const computer = await Computer.findOrFail(params.id);
    await computer.delete();
  }
}

module.exports = ComputerController;
