module.exports = function (number) {
  'use strict';
  var MIN = 0, MAX = 4999, crossingTransformation, transform = number;
  crossingTransformation = [
    {decimal: 1000, roman: 'M'},
    {decimal: 900, roman: 'CM'},
    {decimal: 500, roman: 'D'},
    {decimal: 490, roman: 'XD'},
    {decimal: 100, roman: 'C'},
    {decimal: 90, roman: 'XC'},
    {decimal: 50, roman: 'L'},
    {decimal: 40, roman: 'XL'},
    {decimal: 10, roman: 'X'},
    {decimal: 9, roman: 'IX'},
    {decimal: 5, roman: 'V'},
    {decimal: 4, roman: 'IV'},
    {decimal: 1, roman: 'I'}
  ];

  if (transform !== parseInt(transform, 10)) {
    throw new TypeError('Input should be a integer number');
  }

  if (transform < MIN || transform > MAX) {
    throw new RangeError('The number should be in ' + MIN + ' and ' + MAX + ' range');
  }

  if (transform === MIN) {
    return 'nulla';
  }

  return crossingTransformation.reduce(function romanTransformation (output, crossing) {
    if(transform < crossing.decimal) {
      return output
    }
    transform -= crossing.decimal;
    output += crossing.roman;
    return romanTransformation(output, crossing);
  }, '');

};
