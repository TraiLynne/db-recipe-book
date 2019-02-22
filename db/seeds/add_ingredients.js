
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Chicken Legs'},
        {name: 'Chicken Wings'},
        {name: 'Pork Chops'},
        {name: 'Bacon'},
        {name: 'Cheese'},
        {name: 'Milk'},
        {name: 'Steak'},
        {name: 'Shrimp'},
        {name: 'Potatoes'},
        {name: 'Tomatoes'},
        {name: 'Ground Beef'},
        {name: 'Flour'},
        {name: 'Oil'},
        {name: 'Mandarin Orange'},
        {name: 'Pineapple'},
        {name: 'Hamburger Bun'},
        {name: 'Mayo'},
        {name: 'Relish'},
        {name: 'BBQ Sauce'},
        {name: 'Garlic'},
        {name: 'Bay Seasoning'},
        {name: 'Creole Seasoning'},
        {name: 'Pasta'},
        {name: 'Alfredo Sauce'}
      ]);
    });
};
