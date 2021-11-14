import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Enfermeros = db.define('Enfermeros',{
    ID:{
        type: DataTypes.INTEGER
    },
    Nombre:{
        type: DataTypes.STRING
    },
    Apellidos:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Enfermeros;