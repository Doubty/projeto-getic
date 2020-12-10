const Ticket = use('App/Models/Ticket');
const TicketType = use('App/Models/TicketType');

class ComputerController {
  async getAll() {
    const tickets = await Ticket.all();
    return tickets;
  }

  async get({ params }) {
    const ticket = await Ticket.findOrFail(params.id);
    return ticket;
  }

  async create({ request, response, auth }) {
    const data = request.only(['tipo', 'descricao', 'computer_id']);
    data.user_id = auth.user.id;
    if (data.tipo === TicketType.COMPUTER_MAINTENCE && !data.computer_id) {
      return response.status(400);
    }
    const ticket = await Ticket.create(data);
    return ticket;
  }

  async update({ request, params }) {
    const data = request.only(['descricao', 'status']);
    const ticket = await Ticket.findOrFail(params.id);
    ticket.merge(data);
    await ticket.save();
    return ticket;
  }

  async remove({ params }) {
    const ticket = await Ticket.findOrFail(params.id);
    await ticket.delete();
  }
}

module.exports = ComputerController;
