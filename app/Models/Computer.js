/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Computer extends Model {
  static get table() {
    return 'computers';
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  ticket() {
    return this.belongsTo('App/Models/Ticket');
  }
}

module.exports = Computer;
