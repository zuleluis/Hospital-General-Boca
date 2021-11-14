import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Pacientes_DatosIdent = db.define('Pacientes_DatosIdent',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    LugarReferencia:{
        type: DataTypes.STRING
    },
    NombreEsposa:{
        type: DataTypes.STRING
    },
    InicioRelacion:{
        type: DataTypes.DATE
    },
    NumHijos :{
        type: DataTypes.INTEGER
    },
    EdadMenor:{
        type: DataTypes.INTEGER
    },
    Domicilio:{
        type: DataTypes.STRING
    },
    Telefono1:{
        type: DataTypes.STRING
    },
    DomicilioTrabajo:{
        type: DataTypes.STRING
    },
    Telefono2:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Pacientes_DatosIdent;