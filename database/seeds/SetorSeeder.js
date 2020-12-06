const Factory = use('Factory');

class SetorSeeder {
  async run() {
    await Factory.model('App/Models/Setor').create();
  }
}

module.exports = SetorSeeder;
