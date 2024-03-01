// aggregation.js

const db = require('./serveur');
const User = require('./model/user');
const Stuff = require('./model/Stuff');


async function run() {
  // Effectuer l'opération $geoNear pour trier les utilisateurs par distance
  const users = await User.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [48.8566, 2.3488] }, 
        distanceField: "distance",
        spherical: true
      }
    }
  ]);

  // la jointure avec la collection "Stuffs" pour récupérer les "Stuffs" correspondants à chaque utilisateur
  for (const user of users) {
    user.stuffs = await Stuff.find({ userId: user._id });
    console.log("userId", user._id)
  }

  console.log('Utilisateurs avec leurs Stuffs:', users);
  
  process.exit(0);
}

run().catch(console.error);
