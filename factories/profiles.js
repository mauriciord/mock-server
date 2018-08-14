const { manager, factory } = require('node-factory');

const treatments = ['Dr.', 'Dra.', 'Sr.', 'Sra.'];
const councils = ['CRAS', 'CRBM', 'CREFITO', 'COREN', 'CREF', 'CRF', 'CRFA', 'CRM', 'CRN', 'CRO', 'CRP', 'CRT', 'CRNT'];

manager.register('Profile', faker => {
  return {
    id: faker.random.number(),
    user: null,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.phoneNumberFormat(),
    introduction: faker.lorem.paragraph(),
    website: faker.internet.url(),
    facebook: faker.internet.url(),
    instagram: faker.internet.url(),
    picture: faker.image.avatar(),
    register_number: faker.random.number(),
    treatment: treatments[Math.floor(Math.random() * treatments.length)],
    council_name: councils[Math.floor(Math.random() * councils.length)],
  }
});

module.exports = factory;
