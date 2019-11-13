const celebrities = [
  {
    name: "Tom Cruise",
    occupation: "Actor",
    catchPhrase: "Balbla pilote, blabla secret agent, blabla scientologue"
  },
  {
    name: "James Bond",
    occupation: "Queen savior",
    catchPhrase: "My Martini is still dry"
  },

  {
    name: "Dexter Morgan",
    occupation: "Killer and rat lab",
    catchPhrase: "Bloody breakfast"
  }
];

const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

mongoose.connect("mongodb://localhost/library-project");

// add all the celebrity from `celebrities` in the database in the collection `Celebrity`

Celebrity.insertMany(celebrities)
  .then(documents => {
    console.log(`Success! ${documents.length} books were added`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
