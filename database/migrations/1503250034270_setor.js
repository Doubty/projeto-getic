/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class SetorSchema extends Schema {
  up() {
    this.create('setores', (table) => {
      table.increments();
      table.string('nome', 60).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('setores');
  }
}

module.exports = SetorSchema;
