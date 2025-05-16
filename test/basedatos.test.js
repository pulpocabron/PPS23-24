// test/db.test.js
const { expect } = await import('chai');
const connection = require('../src/conexion');


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