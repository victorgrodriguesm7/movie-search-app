import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("movies", (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.text("title").notNullable();
        table.integer("year").notNullable();
        table.text("director").notNullable();
        table.text("synopsis").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable("movies");
    return knex.schema.createTable("movies", (table: Knex.TableBuilder) => {
        table.increments("id").primary();
        table.text("title").notNullable();
        table.integer("year").notNullable();
        table.text("director").notNullable();
        table.text("synopsis").notNullable();
    })
}

