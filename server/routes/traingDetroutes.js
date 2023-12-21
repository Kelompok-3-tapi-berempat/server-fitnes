const express = require("express")
const routes = express.Router()
const traningDetailControllers = require('../controllers/traningDetailControllers')

const upload = require("../middleware/upload")

routes.get('/index', traningDetailControllers.getForm)
routes.get('/formcreate', traningDetailControllers.formCreate)

routes.get('/', traningDetailControllers.getAllDataDetail)
routes.get('/:id', traningDetailControllers.getById)
routes.get('/one/:id', traningDetailControllers.getOneId)
routes.post('/detail/create', upload.single('vidio'), traningDetailControllers.create)
routes.put('/detail/edit/:id', upload.single('vidio'),  traningDetailControllers.edit)
routes.delete('/delete/:id', traningDetailControllers.delete)

module.exports = routes
