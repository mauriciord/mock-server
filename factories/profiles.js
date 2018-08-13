const { manager, factory } = require('node-factory');

manager.register('Profile', faker => {
  return {
    id: faker.random.number(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    crm: faker.random.number(),
    specialty: faker.company.bsAdjective(),
    photo: faker.image.people(),
  }
});

module.exports = factory;
