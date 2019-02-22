
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Fried Chicken',
          dish_id: 1,
          directions: 'Fry the chicken'
        },
        {
          name: 'Orange & Pineapple Chicken ',
          dish_id: 1,
          directions: 'Put everything in a slow cooker'
        },
        {
          name: 'Burger',
          dish_id: 2,
          directions: 'Gril and Stack'
        },
        {
          name: 'Ribs',
          dish_id: 2,
          directions: 'Pull out that smoker'
        },
        {
          name: 'Fried Pork Chops',
          dish_id: 3,
          directions: 'Fry the pork'
        },
        {
          name: 'Baked Pork Chops',
          dish_id: 3,
          directions: 'Bake the Pork'
        },
        {
          name: 'Shrimp Scampi',
          dish_id: 4,
          directions: 'Call Red Lobster'
        },
        {
          name: 'Shrimp Alfredo',
          dish_id: 4,
          directions: 'Mix everything in a pot'
        },
      ]);
    });
};
