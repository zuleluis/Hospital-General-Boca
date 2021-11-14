import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const EstudioAnatomapotologico = db.define('EstudioAnatomapotologico',{
    ID:{
        type: DataTypes.INTEGER
    },
    IdHistoriaClinica:{
        type: DataTypes.INTEGER
    },
    FechaEnvio:{
        type: DataTypes.DATE
    },
    Clave:{
        type: DataTypes.STRING
    },
    Resultado:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default EstudioAnatomapotologico;