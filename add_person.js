// const pg = require("pg");
const settings = require("./settings"); // settings.json

var knex = require('knex')({
  client: 'pg',
  version: '9.5',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

// knex.select('first_name').from('famous_people')
//   .asCallback(function(err, rows) {
//     if (err) return console.error(err);
//     knex.select('first_name').from('famous_people')
//       // .whereIn('nickname', _.pluck(rows, 'name'))
//       .asCallback(function(err, rows) {
//         if (err) return console.error(err);
//         console.log(rows);
//       });
//   });
const name = process.argv[2]

  knex('famous_people').insert([
    { first_name:},
    { last_name: }
  ])