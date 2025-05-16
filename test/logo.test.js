//test de prueba para detectar que exista archivo de logo
// test/logo.test.js
const chai = require('chai');
const fs = require('fs');
const path = require('path');

const { expect } = chai;

describe('Logo test', () => {
  it('debería devolver el logo en /assets/images/logo.png', () => {
    const filePath = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo.png');
    const exists = fs.existsSync(filePath);
    expect(exists).to.be.true;
  });
});
