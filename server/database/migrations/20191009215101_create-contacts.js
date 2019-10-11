exports.up = function(knex) {
  return knex.schema.createTable("contacts", table => {
    table.increments();
    table.string("name");
    table.string("email");
    table.string("address");
    table.string("mobile");
    table
      .integer("created_by")
      .references("id")
      .inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("contacts");
};
