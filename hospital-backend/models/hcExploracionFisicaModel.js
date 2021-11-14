import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const HC_ExploracionFisica = db.define('HC_ExploracionFisica',{
    ID:{
        type: DataTypes.INTEGER
    },
    IdHistoriaClinica:{
        type: DataTypes.INTEGER
    },
    Anteced_HeredoFam:{
        type: DataTypes.STRING
    },
    Anteced_PersonalesNP:{
        type: DataTypes.STRING
    },
    Anteced_PersonalesP:{
        type: DataTypes.STRING
    },
    TA:{
        type: DataTypes.STRING
    },
    Peso:{
        type: DataTypes.STRING
    },
    Talla:{
        type: DataTypes.STRING
    },
    FC:{
        type: DataTypes.STRING
    },
    FR:{
        type: DataTypes.STRING
    },
    TEM:{
        type: DataTypes.STRING
    },
    ExploOrganosGenitales:{
        type: DataTypes.STRING
    },
    TipoPaciente:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default HC_ExploracionFisica;