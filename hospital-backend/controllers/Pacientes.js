import Paciente from "../models/pacientesModel.js";

export const Pacientes = {
    obtenerPacientes : async (req, res) => {

        try {
            const pacientes = await Paciente.findAll();
            //Poner status http por buena practica
            res.status(200).json(pacientes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    buscarPaciente : async (req, res) => {
        try {
            const paciente = await Paciente.findAll({
                where: {
                    noExpediente: req.params.NoExpediente
                }
            });
            res.json(paciente[0]);
        } catch (error) {
            res.json({ message: error.message });
        } 
    },
    agregaPaciente: async (req, res) => {
        try {
            await Paciente.create(req.body);
            res.json({
                "message": "Paciente registrado"
            });
        } catch (error) {
            res.json({ message: error.message });
        }
    } 
}
/*
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
*/