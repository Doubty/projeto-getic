/**
 * @typedef {import('@adonisjs/framework/src/Request')} Request
 * @typedef {import('@adonisjs/auth/src/Schemes/Session')} Auth
 */

const User = use('App/Models/User');

class AuthController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async register({ request }) {
    const data = request.only([
      'nome_completo',
      'cpf',
      'cep',
      'telefone',
      'tipo',
      'email',
      'password',
      'setor_id',
    ]);
    const user = await User.create(data);
    return user;
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   */
  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;
