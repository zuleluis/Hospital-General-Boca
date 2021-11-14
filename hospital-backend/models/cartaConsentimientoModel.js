import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const CartaConsentimiento = db.define('CartaConsentimientoVSB',{
    ID:{
        type: DataTypes.INTEGER
    },
    FK_NoExpediente:{
        type: DataTypes.INTEGER
    },
    Testigo1:{
        type: DataTypes.STRING
    },
    Testigo2:{
        type: DataTypes.STRING
    },
    IdPersonalConsejeria:{
        type: DataTypes.INTEGER
    },
    IdMedicoResponsable:{
        type: DataTypes.INTEGER
    }
},{
    freezeTableName: true
});
 
export default CartaConsentimiento;