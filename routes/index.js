import express from "express";
import { paginaInicio,paginaNosotros, paginaViajes,paginaTestimoniales,paginaDetalleViaje} from "../controllers/paginasController.js";
import { guardarTestimonial } from '../controllers/testimonialController.js'
const router = express.Router()

router.get('/',paginaInicio)
        
router.get('/nosotros',paginaNosotros)

router.get('/viajes',paginaViajes)
//:comodin carga un metodo del controlador que va generando distintas rutas, seria una variable en el url
router.get('/viajes/:viaje',paginaDetalleViaje)

router.get('/testimoniales',paginaTestimoniales)
router.post('/testimoniales',guardarTestimonial)


export default router