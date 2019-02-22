
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();

        tbl
            .string('name')
            .notNullable()
            .unique('uq_ingredient_name');

        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
};
