var expect = require('chai').expect;
var romanNumbers = require('../index');

describe('testing roman number converter', function () {


  it('Expect to throw Error on negative number', function () {
    expect(function () {
      romanNumbers(-1);
    }).to.throw('The number must be positive');
  });

  it('Expect to throw TypeError if imput is not a number or integer', function () {
    expect(function () {
      romanNumbers(null);
    }).to.throw('Input should be a integer number');

    expect(function () {
      romanNumbers(2.22);
    }).to.throw('Input should be a integer number');
  });

  it('Expect to return a string', function () {
    expect(romanNumbers(1)).to.be.a('string');
  });

  it('Expect to return "nulla" from 0', function () {
    expect(romanNumbers(0)).to.be.equal('nulla');
  });

  it('Expect to return "I" from 1', function () {
    expect(romanNumbers(1)).to.be.equal('I');
  });

  it('Expect to return "II" from 2', function () {
    expect(romanNumbers(2)).to.be.equal('II');
  });

  it('Expect to return "III" from 3', function () {
    expect(romanNumbers(3)).to.be.equal('III');
  });

  it('Expect to return "IV" from 4', function () {
    expect(romanNumbers(4)).to.be.equal('IV');
  });

  it('Expect to return "V" from 5', function () {
    expect(romanNumbers(5)).to.be.equal('V');
  });

  it('Expect to return "VI" from 6', function () {
    expect(romanNumbers(6)).to.be.equal('VI');
  });

  it('Expect to return "IX" from 9', function () {
    expect(romanNumbers(9)).to.be.equal('IX');
  });

  it('Expect to return "X" from 10', function () {
    expect(romanNumbers(10)).to.be.equal('X');
  });

  it('Expect to return "XX" from 20', function () {
    expect(romanNumbers(20)).to.be.equal('XX');
  });

  it('Expect to return "XXVI" from 26', function () {
    expect(romanNumbers(20)).to.be.equal('XX');
  });

  it('Expect to return "XL" from 40', function () {
    expect(romanNumbers(40)).to.be.equal('XL');
  });

  it('Expect to return "L" from 50', function () {
    expect(romanNumbers(50)).to.be.equal('L');
  });

  it('Expect to return "XC" from 90', function () {
    expect(romanNumbers(90)).to.be.equal('XC');
  });

  it('Expect to return "C" from 100', function () {
    expect(romanNumbers(100)).to.be.equal('C');
  });

  it('Expect to return "XD" from 490', function () {
    expect(romanNumbers(490)).to.be.equal('XD');
  });

  it('Expect to return "D" from 500', function () {
    expect(romanNumbers(500)).to.be.equal('D');
  });

  it('Expect to return "CM" from 900', function () {
    expect(romanNumbers(900)).to.be.equal('CM');
  });

  it('Expect to return "M" from 1000', function () {
    expect(romanNumbers(1000)).to.be.equal('M');
  });

  it('Expect to return "MCMXCIX" from 1999', function () {
    expect(romanNumbers(1999)).to.be.equal('MCMXCIX');
  });

  it('Expect to return "MCMXCVIII" from 1998', function () {
    expect(romanNumbers(2998)).to.be.equal('MMCMXCVIII');
  });

});
