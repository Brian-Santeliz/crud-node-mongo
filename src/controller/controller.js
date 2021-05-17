const edificacionModel = require('../models/model');
const obtener = async (req, res) => {
  try {
    const response = await edificacionModel.find();
    if (response.length === 0) {
      res
        .status(200)
        .json({ mensaje: 'No hay construcciones registradas actualmente.' });
    } else {
      res.status(200).json(response);
    }
  } catch (error) {
    console.error(error.message);
  }
};
const agregar = async (req, res) => {
  const { nombre, ancho, alto, materiales } = req.body;
  try {
    const nuevaEdificacion = new edificacionModel({
      nombre,
      ancho,
      materiales,
      alto,
    });
    await nuevaEdificacion.save();
    res.status(201).json({ mensaje: 'Construcción registrada correctamente.' });
  } catch (error) {
    console.error(error.message);
  }
};
const actualizar = async (req, res) => {
  const { id } = req.params;
  const { nombre, ancho, alto, materiales } = req.body;
  try {
    await edificacionModel.findOneAndUpdate(
      { _id: id },
      { nombre, ancho, alto, materiales }
    );
    res
      .status(200)
      .json({ mensaje: 'Construcción actualizada satisfactoriamente.' });
  } catch (error) {
    console.error(error.message);
  }
};
const eliminar = async (req, res) => {
  const { id } = req.params;
  try {
    await edificacionModel.findOneAndDelete({ _id: id });
    res
      .status(200)
      .json({ mensaje: 'La construcción ha sido eliminada correctamente.' });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  obtener,
  agregar,
  actualizar,
  eliminar,
};
