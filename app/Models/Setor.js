/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Setor extends Model {
  static get table() {
    return 'setores';
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  users() {
    return this.hasMany('App/Models/User');
  }
}

module.exports = Setor;
