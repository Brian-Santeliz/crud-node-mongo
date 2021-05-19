const { connect } = require('mongoose');

exports.conexionMongo = async () => {
  try {
    await connect('mongodb://localhost/actividad1', {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Base de datos conectada correctamente")
  } catch (error) {
    console.error(error.message);
  }
};
