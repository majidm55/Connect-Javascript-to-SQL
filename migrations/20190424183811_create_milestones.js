// const settings = require("./settings"); // settings.json

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('milestones', function (table) {
      table.string('description');
      table.date('date_achieved');
      table.increments('id');
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('milestones')])

};



