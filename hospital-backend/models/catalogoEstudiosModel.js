import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const CatalogoEstudios = db.define('CatalogoEstudios',{
    ID:{
        type: DataTypes.INTEGER
    },
    Nombre:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default CatalogoEstudios;