/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

const UserTypes = ['NORMAL'];

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('nome_completo', 60).notNullable();
      table.string('cpf', 11).notNullable().unique();
      table.string('cep', 8).notNullable();
      table.string('telefone', 11).notNullable();
      table.enu('tipo', UserTypes).notNullable();
      table.string('email', 30).notNullable().unique();
      table.string('password', 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
