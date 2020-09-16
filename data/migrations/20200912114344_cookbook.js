
exports.up = async function(knex) {
    await knex.schema
        .createTable("users", table => {
            table.increments("id")
            table.string("first_name").notNullable()
            table.string("password").notNullable()
            table.string("email").notNullable().unique()
            table.string("last_name")
            table.blob("photo")
        })
        .createTable("recipes", table => {
            table.increments("id")
            table.string("name").notNullable()
            table.integer("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.text("directions").notNullable()
            table.blob("photo").notNullable()
            table.string("prep_time").notNullable()
            table.string("bake_cook_time").notNullable()
            table.boolean("oven").defaultTo(false)
            table.integer("temperature")
            table.text("description")
            table.text("trade_secrets")
            table.text("pairings")
        })
        .createTable("tags", table => {
            table.increments("id")
            table.string("tag").notNullable().unique()
        })
        .createTable("collections", table => {
            table.increments("id")
            table.string("name").notNullable().unique()
            table.integer("admin_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.boolean("private").defaultTo(true)
            table.blob("photo").notNullable()
            table.text('description')
        })
        .createTable("comments", table => {
            table.increments("id")
            table.text("comment").notNullable()
            table.integer("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            // table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
        })
        .createTable("ingredients", table => {
            table.increments("id")
            table.string("name").notNullable().unique()
        })
        .createTable("measurement_unit", table => {
            table.increments("id")
            table.string("unit").notNullable().unique()
        })
        .createTable("measurement_quantity", table => {
            table.increments("id")
            table.string("quantity").notNullable().unique()
        })
        .createTable("users_recipes", table => {
            table.integer("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.primary(["user_id", "recipe_id"])
        })
        .createTable("users_collections", table => {
            table.integer("user_id").references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("collection_id").references("id").inTable("collections").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.primary(["user_id", "collection_id"])
        })
        .createTable("recipes_collections", table => {
            table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("collection_id").references("id").inTable("collections").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.primary(["recipe_id", "collection_id"])
        })
        .createTable("recipes_ingredients", table => {
            table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("ingredient_id").references("id").inTable("ingredients").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.primary(["recipe_id", "ingredient_id"])
        })
        .createTable("recipes_tags", table => {
            table.integer("recipe_id").references("id").inTable("recipes").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.integer("tag_id").references("id").inTable("tag").onDelete("CASCADE").onUpdate("CASCADE").unsigned()
            table.primary(["recipe_id", "tag_id"])
        })   
};

exports.down = async function(knex) {
    await knex.schema
        .dropTableIfExists("recipes_tags")
        .dropTableIfExists("recipes_ingredients")
        .dropTableIfExists("recipes_collections")
        .dropTableIfExists("users_collections")
        .dropTableIfExists("users_recipes")
        .dropTableIfExists("measurement_quantity")
        .dropTableIfExists("measurement_unit")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("comments")
        .dropTableIfExists("collections")
        .dropTableIfExists("tags")
        .dropTableIfExists("recipes")
        .dropTableIfExists("users")
};
