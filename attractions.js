const request = require('superagent');
const attractions = require('themeparks');

module.exports = function(rideID) {

  let currentPark;

  if (rideID.indexOf("MagicKingdom") != -1)
    currentPark = new attractions.Parks.WaltDisneyWorldMagicKingdom();  
  else if (rideID.indexOf("Epcot") != -1)
    currentPark = new attractions.Parks.WaltDisneyWorldEpcot();
  else if (rideID.indexOf("HollywoodStudios") != -1)
    currentPark = new attractions.Parks.WaltDisneyWorldHollywoodStudios();
  else if (rideID.indexOf("AnimalKingdom") != -1)
    currentPark = new attractions.Parks.WaltDisneyWorldAnimalKingdom();
  else if (rideID.indexOf("UniversalStudios") != -1)
    currentPark = new attractions.Parks.UniversalStudiosFlorida();
  else if (rideID.indexOf("UniversalIslands") != -1)
    currentPark = new attractions.Parks.UniversalIslandsOfAdventure();
  // Seaworld is no longer operational and has been removed


  return new Promise((resolve, reject) => {
    currentPark.GetWaitTimes(function(err, rides) {
      if (err) return console.error(err);

      let ride = rides.filter((ride) => {return (ride.id === rideID);})[0];

      if (err || !ride)
        reject(err || 'Ride not found.');
      else
        resolve(ride);
    });
  });
}