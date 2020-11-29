const User = use('App/Models/User');

class AuthController {
  async register({ request }) {
    const data = request.only(['email', 'password']);
    const { id, email } = await User.create(data);
    return { id, email };
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = AuthController;
