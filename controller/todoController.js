
const Model = require("../model/todoModel")


module.exports = {
    getAllTasks: async (req, res) => {
        try {
            const allTasks = await Model.aggregate([])
        } catch (error) {
            console.log(error);
        }
    },
    addNewTask: async (req, res) => {
        try {
            console.log(req.body);

            await Model.create({
                title: req.body.title,
                description: req.body.description
            })
        } catch (error) {
            console.log(error);
        }
    },


    changeStatus: async (req, res) => {
        try {
            console.log(req);
        } catch (error) {
            console.log(error);
        }
    },

    deleteTask: async (req, res) => {
        try {
            console.log(req);
        } catch (error) {
            console.log(error);
        }
    }

}