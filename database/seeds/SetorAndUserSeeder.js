const Factory = use('Factory');

class SetorAndUserSeeder {
  async run() {
    const setor = await Factory.model('App/Models/Setor').create();
    const user = await Factory.model('App/Models/User').make();
    setor.users().save(user);
  }
}

module.exports = SetorAndUserSeeder;
