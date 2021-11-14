import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const HistoriaClinica = db.define('HistoriaClinica',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default HistoriaClinica;