import { Sequelize } from "sequelize";
import db from '../config/db.js'

export const Viaje = db.define('viajes',{
    titulo:{
        type: Sequelize.STRING
    },
    precio:{
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.DATE
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    disponibles:{
        type: Sequelize.STRING
    },
    slug:{ 
        type: Sequelize.STRING
    },
    //Los Slugs en WordPress son básicamente la estructura de la url, es el nombre que añades detrás del nombre de tu dominio en cada una de tus páginas o entradas de tu web
})