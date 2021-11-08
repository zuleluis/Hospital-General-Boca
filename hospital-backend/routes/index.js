import express from "express";
 
import { 
    Pacientes
    /*getProductById,
    updateProduct,
    deleteProduct*/
} from "../controllers/Pacientes.js";
 
const router = express.Router();
 
router.get('/', Pacientes.obtenerPacientes);
router.get('/:id', Pacientes.buscarPaciente);
/*router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);*/
 
export default router;