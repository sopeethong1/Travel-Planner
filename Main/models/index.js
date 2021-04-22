const Traveller = require('./Traveller');
const Location = require('./Location');
const Trip = require('./Trip');

Traveller.belongsToMany(Location, {
  //TODO: Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  //TODO: Define an alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
  // TODO: Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // TODO: Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
