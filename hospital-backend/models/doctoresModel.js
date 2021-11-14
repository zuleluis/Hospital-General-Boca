import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Doctores = db.define('Doctores',{
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
 
export default Doctores;