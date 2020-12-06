/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Computer extends Model {
  static get table() {
    return 'computers';
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Computer;
