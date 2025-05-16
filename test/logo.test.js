//test de prueba para detectar que exista archivo de logo
// test/logo.test.js
const fs = require('fs');
const path = require('path');

import('chai').then(chaiModule => {
  chai = chaiModule;
  // Aquí puedes continuar con tus pruebas
  runTests();
}).catch(err => {
  console.error("Error al cargar chai:", err);
});


const expect = chai.expect;

describe('Logo test', () => {
  it('debería devolver el logo en /assets/images/logo.png', () => {
    const filePath = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo.png');
    const exists = fs.existsSync(filePath);
    expect(exists).to.be.true;
  });
});
