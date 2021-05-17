const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const rutasConstruccion = require('./router/router');

const servidor = express();
//config
servidor.set('puerto', 3500);

//middlewares
servidor.use(express.json());
servidor.use(morgan('dev'));
servidor.use(helmet());
servidor.use(cors());

//router
servidor.use('/backend/construccion', rutasConstruccion)

module.exports = {
  servidor
}