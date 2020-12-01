/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

/** @type {import('../../app/Models/User')} */
const UserType = use('App/Models/UserType');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      const userTypes = Object.values(UserType);

      table.increments();
      table.string('nome_completo', 60).notNullable();
      table.string('cpf', 11).notNullable().unique();
      table.string('cep', 8).notNullable();
      table.string('telefone', 11).notNullable();
      table.enu('tipo', userTypes).notNullable();
      table.string('email', 30).notNullable().unique();
      table.string('password', 60).notNullable();
      table
        .integer('setor_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('setores')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
