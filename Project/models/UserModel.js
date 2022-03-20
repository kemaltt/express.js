const { Sequelize } = require('sequelize');
const { DB_USERNAME, DB_PSWD, DB_HOST, DB_PORT, DB_NAME } = process.env
// const sequelize = new Sequelize('postgres://postgres:    @localhost:5432/project')
const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PSWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

sequelize.authenticate()
.then(() => console.log('Connection has been established successfully.'))
.catch(err => console.error('Unable to connect to the database:', error))


const UserModel = sequelize.define(
    'users',
    {
        //attributes
        first_name: {
            type : Sequelize.STRING,
        },
        last_name: {
            type : Sequelize.STRING,
        }
    },
    {
        //options
    }
)

module.exports = UserModel;