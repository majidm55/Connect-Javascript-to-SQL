const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
const name = process.argv[2];
console.log(name); // pass argument to query

function lookupPerson(name) {
  client.query("SELECT * FROM famous_people WHERE first_name = $1 OR last_name =$1", [name], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    console.log("Searching...")
    console.log(`Found ${result.rows.length} person(s) by the name '${name}':`);
    let count = 0;
    result.rows.forEach((row) => {
      console.log(` - ${count += 1}: ${row.first_name} ${row.last_name}, born '${row.birthdate.toISOString().slice(0, 10)}'`);
    })
    client.end();
  });
};

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }
  lookupPerson(name);
});

