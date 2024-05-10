const sequelize = require('./database');

sequelize.authenticate()
  .then(() => {
    console.log('Conexión establecida exitosamente.');
    // Puedes realizar operaciones adicionales con la base de datos aquí
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });