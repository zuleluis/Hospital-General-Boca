import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const MetodosAnticonceptivos = db.define('ListMetodosAnticonceptivos',{
    ID:{
        type: DataTypes.INTEGER
    },
    Nombre:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default MetodosAnticonceptivos;