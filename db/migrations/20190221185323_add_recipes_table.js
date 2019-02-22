
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();

        tbl
            .integer('dish_id')
            .notNullable()
            .references('id')
            .inTable('dishes');

        tbl
            .string('name')
            .notNullable()
            .unique('uq_recipe_name');

        tbl
            .string('directions')
            .notNullable();
        
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
