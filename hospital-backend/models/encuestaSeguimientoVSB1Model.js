import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const EncuestaSeguimiento_VSB1 = db.define('EncuestaSeguimiento_VSB1',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    ComoSeInformo:{
        type: DataTypes.STRING
    },
    QuienDioOrientacion:{
        type: DataTypes.STRING
    },
    IdReferidoDeCentroDeSalud:{
        type: DataTypes.STRING
    },
    IdCualCentroDeSalud:{
        type: DataTypes.INTEGER
    },
    IdTratoDelPersonal:{
        type: DataTypes.STRING
    },
    IdQuedoSatisfecho:{
        type: DataTypes.STRING
    },
    PorqueNoSatisfecho:{
        type: DataTypes.STRING
    },
    IdTuvoComplicacion:{
        type: DataTypes.STRING
    },
    CualComplicacion:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default EncuestaSeguimiento_VSB1;