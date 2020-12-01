/* eslint-disable no-param-reassign */
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/Setor', (faker) => {
  faker.locale = 'pt_BR';
  return {
    nome: faker.word(),
  };
});

Factory.blueprint('App/Models/User', (faker) => {
  faker.locale = 'pt_BR';
  return {
    nome_completo: 'Pedro',
    cpf: '11111111111',
    cep: '12345678',
    telefone: '84999887766',
    tipo: 'NORMAL',
    email: 'hello@world.com',
    password: 'hello',
  };
});
