// test/db.test.js
import('chai').then(chaiModule => {
  chai = chaiModule;
  // Aquí puedes continuar con tus pruebas
  runTests();
}).catch(err => {
  console.error("Error al cargar chai:", err);
});

const connection = require('../src/conexion');

const expect = chai.expect;

describe('MySQL Connection', () => {
  it('debería conectarse y ejecutar una consulta simple', (done) => {
    connection.query('SELECT 1 + 1 AS result', (err, results) => {
      expect(err).to.be.null;
      expect(results).to.be.an('array');
      expect(results[0].result).to.equal(2);
      done();
    });
  });
});