import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const AvisosImportantesVSB = db.define('AvisosImportantesVSB',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    IdMedicoResponsable:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default AvisosImportantesVSB;