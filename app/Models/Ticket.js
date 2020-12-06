/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Ticket extends Model {
  static get table() {
    return 'tickets';
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  computer() {
    return this.hasOne('App/Models/Ticket');
  }
}

module.exports = Ticket;
