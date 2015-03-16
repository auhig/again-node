module.exports = {

    database: {
        dialect: 'mysql',
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'again',
        storage: 'database.storage',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    }

};