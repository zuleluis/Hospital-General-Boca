import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const ProcedimientoQuirurgico_VSB = db.define('ProcedimientoQuirurgico_VSB',{
    ID:{
        type: DataTypes.INTEGER
    },
    IdHistoriaClinca:{
        type: DataTypes.INTEGER
    },
    FechaCirugia:{
        type: DataTypes.DATE
    },
    IdCirujano:{
        type: DataTypes.INTEGER
    },
    NotaQuirurgica:{
        type: DataTypes.STRING
    },
    PatologiaEncontrada:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default ProcedimientoQuirurgico_VSB;