import { Sequelize } from "sequelize";
 
const db = new Sequelize('hospitalGeneral_BocaDelRio', 'root', '2351043820', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;