module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: './data/dev.sqlite3'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
        useNullAsDefault: true
    },
    testing: {
        client: 'sqlite3',
        connection: {
            filename: ':memory:'
        },
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        },
        useNullAsDefault: true
    }
};