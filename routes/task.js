const express = require('express')
const router = express.Router()
const { getAllTasks, addNewTask, changeStatus, deleteTask } = require('../controller/todoController')
const { verifyUser } = require('../middlewares/verifyUser')

// ============================================================================================================

router.get('/getall', verifyUser, getAllTasks)
router.post('/addtask', verifyUser, addNewTask)
router.patch('/changestatus', verifyUser, changeStatus)
router.delete('/delete', verifyUser, deleteTask)

// ============================================================================================================

module.exports = router
