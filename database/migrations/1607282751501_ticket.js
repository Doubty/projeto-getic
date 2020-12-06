/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
const TicketType = use('App/Models/TicketType');
const TicketStatus = use('App/Models/TicketStatus');

class TicketSchema extends Schema {
  up() {
    this.create('tickets', (table) => {
      const ticketTypes = Object.values(TicketType);
      const ticketStatuses = Object.values(TicketStatus);

      table.increments();
      table.enu('tipo', ticketTypes).notNullable();
      table.string('descricao', 200).notNullable();
      table
        .enu('status', ticketStatuses)
        .notNullable()
        .defaultTo(TicketStatus.PENDING);
      table.timestamps();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable();
      table
        .integer('computer_id')
        .unsigned()
        .references('id')
        .inTable('computers');
    });
  }

  down() {
    this.drop('tickets');
  }
}

module.exports = TicketSchema;
