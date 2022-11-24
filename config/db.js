import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
const db = new Sequelize (process.env.DB_NAME,procces.env.DB_USER,procces.env,DB_PASS,{
    host: procces.env.DB_HOST,
    port: procces.env.DB_PORT,
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    operatorAliases:false
})
export default db