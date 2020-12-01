/**
 * @typedef {import('@adonisjs/framework/src/Request')} Request
 * @typedef {import('@adonisjs/auth/src/Schemes/Session')} Auth
 */

const User = use('App/Models/User');

class UserController {
  async getAll() {
    const users = await User.query()
      .with('setor', (builder) => {
        builder.select(['id', 'nome']);
      })
      .fetch();
    return users;
  }

  async get({ params }) {
    const user = await User.findOrFail(params.id);
    return user;
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update({ request, params }) {
    const data = request.only([
      'nome_completo',
      'cpf',
      'cep',
      'telefone',
      'tipo',
      'email',
    ]);
    const user = await User.findOrFail(params.id);
    Object.assign(user, data);
    await user.save();
    return user;
  }

  async remove({ params, auth, response }) {
    const user = await User.findOrFail(params.id);
    if (auth.user.id !== user.id) {
      return response.status(401);
    }
    await user.delete();
    return response.status(200);
  }
}

module.exports = UserController;
