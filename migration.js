const db = require('./serveur');
const User = require('./model/user');
const Stuff = require('./model/Stuff');

async function run() {
    await db.dropDatabase();

    // Ajouter des données fictives dans la collection "Users"
    const users = await User.create([
        { name: 'Okoueret', location: 'Brazzaville', loc: { type: 'Point', coordinates: [48.8566, 2.3522] }},
        { name: 'Elenga', location: 'Pointe-Noire',  loc: { type: 'Point', coordinates: [40.7128, -74.0060] }}
    ]);

    await Stuff.create([
        { description: 'je suis Congolais originaire de talas mikalou', userId: users[0]._id },
        { description: 'je suis sur Sainté à Montchovet', userId: users[1]._id },
    ]);

    console.log('Migration terminée');
    process.exit(0);

}
  

run().catch(console.error);
