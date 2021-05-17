const {servidor} = require('./server')
const { conexionMongo } = require('./config/connection');

servidor.listen(servidor.get('puerto'), async () => {
    try {
      console.log(`Servidor en el puerto: ${servidor.get('puerto')}`);
      await conexionMongo();
    } catch (e) {
      console.error(e.message);
    }
  });
  