import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Escolaridad = db.define('Escolaridad',{
    ID:{
        type: DataTypes.INTEGER
    },
    Nivel:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Escolaridad;