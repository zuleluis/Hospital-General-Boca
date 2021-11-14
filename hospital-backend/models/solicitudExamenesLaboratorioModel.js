import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const SolicitudExamenesLaboratorio = db.define('SolicitudExamenesLaboratorio',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    Servicio:{
        type: DataTypes.STRING
    },
    Diagnostico:{
        type: DataTypes.STRING
    },
    idTipoSolicitud:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default SolicitudExamenesLaboratorio;