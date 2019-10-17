exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "admin",
          name: "janeyney",
          email: "janeyney@geemail.com",
          address: "661 Hidden Pond Road"
        }
      ]);
    });
};
