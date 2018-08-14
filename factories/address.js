const { manager, factory } = require('node-factory');

manager.register('Address', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    address_name: faker.address.streetAddress(),
  }
});

module.exports = factory;
