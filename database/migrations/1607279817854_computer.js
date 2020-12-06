/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const ComputerStatus = use('App/Models/ComputerStatus');

class ComputerSchema extends Schema {
  up() {
    this.create('computers', (table) => {
      const computerStatuses = Object.values(ComputerStatus);

      table.increments();
      table.string('tombamento', 30).notNullable();
      table.string('descricao', 200).notNullable();
      table
        .enu('status', computerStatuses)
        .notNullable()
        .defaultTo(ComputerStatus.AVAILABLE);
      table.timestamps();
      table.integer('user_id').unsigned().references('id').inTable('users');
    });
  }

  down() {
    this.drop('computers');
  }
}

module.exports = ComputerSchema;
