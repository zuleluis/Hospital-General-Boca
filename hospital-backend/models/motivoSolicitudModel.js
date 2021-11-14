import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const MotivoSolicitudProcedimiento_VSB = db.define('MotivoSolicitudProcedimiento_VSB',{
    ID:{
        type: DataTypes.INTEGER
    },
    IdHistoriaClinica:{
        type: DataTypes.INTEGER
    },
    CausaNoHijos:{
        type: DataTypes.STRING
    },
    OpinionPareja:{
        type: DataTypes.STRING
    },
    Id_MetodoPlanificacion:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default MotivoSolicitudProcedimiento_VSB;