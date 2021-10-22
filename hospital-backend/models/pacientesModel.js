import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Pacientes = db.define('Pacientes',{
    NoExpediente:{
        type: DataTypes.INTEGER
    },
    Nombre:{
        type: DataTypes.STRING
    },
    Apellidos:{
        type: DataTypes.STRING
    },
    FechaNacimiento:{
        type: DataTypes.DATE
    },
    Sexo:{
        type: DataTypes.INTEGER
    },
    IdEscolaridad:{
        type: DataTypes.INTEGER
    },
    IdOcupacion:{
        type: DataTypes.INTEGER
    },
    IdReligion:{
        type: DataTypes.INTEGER
    },
    createdAt:{
        type: DataTypes.DATE
    },
    updatedAt:{
        type: DataTypes.DATE
    },
},{
    freezeTableName: true
});
 
export default Pacientes;