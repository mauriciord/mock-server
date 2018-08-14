const { manager, factory } = require('node-factory');

manager.register('Services', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    name: faker.name.findName(),
  }
});

module.exports = factory;
