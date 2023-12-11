import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("db_food", "root", "13thLegion", {
  host: "localhost",
  port: "3307",
  dialect: "mysql",
});
