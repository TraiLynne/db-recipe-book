
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.increments();

        tbl
            .float('quantity')
            .notNullable();

        tbl
            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes');

        tbl
            .integer('ingredient_id')
            .notNullable()
            .references('id')
            .inTable('ingredients');

        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients');
};
