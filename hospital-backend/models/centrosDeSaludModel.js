import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const CentrosDeSalud = db.define('CentrosDeSalud',{
    ID:{
        type: DataTypes.INTEGER
    },
    Clave:{
        type: DataTypes.STRING
    },
    Nombre:{
        type: DataTypes.STRING
    },
    Ubicacion:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default CentrosDeSalud;