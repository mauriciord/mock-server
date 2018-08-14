const { manager, factory } = require('node-factory');

manager.register('Educations', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    institution: faker.company.companyName(),
    course: faker.name.jobArea(),
    conclusion: 2000,
  }
});

module.exports = factory;
