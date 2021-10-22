import express from "express";
 
import { 
    obtenerPacientes,
    buscarPaciente/*,
    getProductById,
    updateProduct,
    deleteProduct*/
} from "../controllers/Pacientes.js";
 
const router = express.Router();
 
router.get('/', obtenerPacientes);
router.get('/:id', buscarPaciente);
/*router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);*/
 
export default router;