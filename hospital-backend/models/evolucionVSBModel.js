import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Evolucion_VSB = db.define('Evolucion_VSB',{
    ID:{
        type: DataTypes.INTEGER
    },
    IdHistoriaClinica:{
        type: DataTypes.INTEGER
    },
    Complicaciones:{
        type: DataTypes.STRING
    },
    EspermatoconetoFecha1:{
        type: DataTypes.DATE
    },
    EspermatoconteoResultado:{
        type: DataTypes.STRING
    },
    EspermatoconteoFecha2:{
        type: DataTypes.DATE
    },
    EspermatoconteoResultado2:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Evolucion_VSB;