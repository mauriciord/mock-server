const factory = require('./factories/profiles');
const educations = require('./factories/educations');
const address = require('./factories/address');
const services = require('./factories/services');

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
