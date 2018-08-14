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

manager.register('Services', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    name: faker.name.findName(),
  }
});

manager.register('Address', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    address_name: faker.address.streetAddress(),
  }
});

manager.register('Educations', faker => {
  return {
    id: faker.random.number(),
    profile: factory('Profile').create(),
    institution: faker.company.companyName(),
    course: faker.name.jobArea(),
    conclusion: 2000,
  }
});

// const factory = require('./factories/profiles');
// const educations = require('./factories/educations');
// const address = require('./factories/address');
// const services = require('./factories/services');

const numberOfResults = 50;

const Profile = factory('Profile').create(numberOfResults);
const Educations = factory('Educations').create(numberOfResults);
const Address = factory('Address').create(numberOfResults);
const Services = factory('Services').create(numberOfResults);

module.exports = () => {
  return ({
    profiles: Profile,
    educations: Educations,
    address: Address,
    services: Services,
  });
};
