import express from'express';
import { provedores } from '../database/db.js';
import provedorescontroller from '../controllers/provedores.controllers.js';
const router = express.Router();

/* GET home page. */
router.get('/mostrarTodos', function(req, res, next) {
const response = provedorescontroller.mostrarTodos();
const sts = response.data === null ? 400 : 200
res.status (sts).json({
  data : response.data ,
  message : response.message
})

});

router.get("/mostrarUno'/:id", function(req, res, next) {
const response = provedorescontroller.mostrarUno(req.params.id);
const sts = response.data === null ? 400 : 200
res.status (sts).json({
  data : response.data ,
  message : response.message
})

});

router.post("/crear'/", function(req, res, next) {
const response = provedorescontroller.mostrarUno(req.body);
const sts = response.data === null ? 400 : 200
res.status (sts).json({
  data : response.data ,
  message : response.message
})

});

export default router;

