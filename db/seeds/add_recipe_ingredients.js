
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          quantity: 8,
          ingredient_id: 1,
          recipe_id:1
        },
        {
          quantity: 3,
          ingredient_id: 13,
          recipe_id: 1
        },
        {
          quantity: 1.5,
          ingredient_id: 12,
          recipe_id: 1
        },
        {
          quantity: 8,
          ingredient_id: 2,
          recipe_id: 2
        },
        {
          quantity: 1,
          ingredient_id: 14,
          recipe_id: 2
        },
        {
          quantity: 1,
          ingredient_id: 15,
          recipe_id: 2
        },
        {
          quantity: 1,
          ingredient_id: 11,
          recipe_id: 3
        },
        {
          quantity: 1,
          ingredient_id: 17,
          recipe_id: 3
        },
        {
          quantity: 1,
          ingredient_id: 10,
          recipe_id: 3
        },
        {
          quantity: 1,
          ingredient_id: 19,
          recipe_id: 4
        },
        {
          quantity: 6,
          ingredient_id: 3,
          recipe_id: 5
        },
        {
          quantity: 3,
          ingredient_id: 13,
          recipe_id: 5
        },
        {
          quantity: 1.5,
          ingredient_id: 12,
          recipe_id: 5
        },
        {
          quantity: 6,
          ingredient_id: 3,
          recipe_id: 6
        },
        {
          quantity: 1.5,
          ingredient_id: 13,
          recipe_id: 6
        },
        {
          quantity: 12,
          ingredient_id: 8,
          recipe_id: 7
        },
        {
          quantity: 1,
          ingredient_id: 20,
          recipe_id: 7
        },
        {
          quantity: 12,
          ingredient_id: 8,
          recipe_id: 8
        },
        {
          quantity: 1,
          ingredient_id: 24,
          recipe_id: 8
        },
        {
          quantity: 1,
          ingredient_id: 23,
          recipe_id: 8
        },
      ]);
    });
};
