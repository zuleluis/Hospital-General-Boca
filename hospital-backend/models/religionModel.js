import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Religion = db.define('Religion',{
    ID:{
        type: DataTypes.INTEGER
    },
    Religion:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Pacientes;