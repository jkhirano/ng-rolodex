exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          id: 1,
          name: "Abby",
          email: "abby@geemail.com",
          address: "123 Main St",
          mobile: "8084222222"
        },
        {
          id: 2,
          name: "Oliver",
          email: "oliver@geemail.com",
          address: "2097 Hickory Ridge Drive",
          mobile: "2483630321"
        },
        {
          id: 3,
          name: "Cookie",
          email: "cookie@geemail.com",
          address: "4980 Rowes Lane",
          mobile: "7708907047"
        },
        {
          id: 4,
          name: "Sandra",
          email: "sandy@geemail.com",
          address: "4598 Bel Meadow Drive",
          mobile: "2406728108"
        },
        {
          id: 5,
          name: "Emi",
          email: "emi@geemail.com",
          address: "1344 Oakridge Lane",
          mobile: "5736585137"
        }
      ]);
    });
};
