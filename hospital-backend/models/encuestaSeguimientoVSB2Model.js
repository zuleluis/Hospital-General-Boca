import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const EncuestaSeguimiento_VSB2 = db.define('EncuestaSeguimiento_VSB2',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    IdRelacionSexualEs:{
        type: DataTypes.STRING
    },
    PorquePeor:{
        type: DataTypes.STRING
    },
    FechaNegatividadExpermatoconteo:{
        type: DataTypes.DATE
    },
    DondeRealizoEspermatoconteo:{
        type: DataTypes.STRING
    },
    IdRecomendariaVSB:{
        type: DataTypes.STRING
    },
    PQ_NoRecomendaria:{
        type: DataTypes.STRING
    },
    ID_LugarMejor:{
        type: DataTypes.STRING
    },
    PQ_LugarMejor:{
        type: DataTypes.STRING
    },
    IdTieneRecoemndacion:{
        type: DataTypes.STRING
    },
    CualRecomendacion:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default EncuestaSeguimiento_VSB2;