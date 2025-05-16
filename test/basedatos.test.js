// test/db.test.js
const chai = require('chai');
const connection = require('../src/conexion');

const { expect } = chai;

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