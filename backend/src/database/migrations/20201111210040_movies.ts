import Knex from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("movies", (table: Knex.TableBuilder) => {
        table.uuid("id").primary();
        table.text("title").notNullable();
        table.integer("string").notNullable();
        table.text("director").notNullable();
        table.text("synopsis").notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable("movies");
    return knex.schema.createTable("movies", (table: Knex.TableBuilder) => {
        table.uuid("id").primary();
        table.text("title").notNullable();
        table.integer("string").notNullable();
        table.text("director").notNullable();
        table.text("synopsis").notNullable();
    })
}

