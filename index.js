const factory = require('./factories/profiles');

const Profile = factory('Profile').create(50);

module.exports = () => {
  return ({
    profiles: Profile,
  });
};
