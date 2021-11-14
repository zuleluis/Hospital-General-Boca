import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const RelacionEstudios = db.define('RelacionEstudios',{
    idRelacionEstudios:{
        type: DataTypes.INTEGER
    },
    IdSolicitudEstudios:{
        type: DataTypes.INTEGER
    },
    IdEstudioSolicitado:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default RelacionEstudios;