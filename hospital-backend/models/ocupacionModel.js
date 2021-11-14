import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Ocupacion = db.define('Ocupacion',{
    ID:{
        type: DataTypes.INTEGER
    },
    Ocupacion:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Ocupacion;