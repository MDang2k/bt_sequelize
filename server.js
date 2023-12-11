import express from "express"
import { Sequelize } from "sequelize"
import mysql from "mysql2"
import rootRoute from "./src/routes/rootRoute.js"

const app = express()
// const sequelize = new Sequelize('sql')

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "13thLegion",
    port: "3307",
    database: "db_food"
})

app.use(express.json())
app.listen(8080)
app.use(rootRoute)
