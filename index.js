module.exports = function (number) {

  var answer = '';
  var romanNumbers = [
    {value: 1000, substitution: 'M'},
    {value: 900, substitution: 'CM'},
    {value: 500, substitution: 'D'},
    {value: 490, substitution: 'XD'},
    {value: 100, substitution: 'C'},
    {value: 90, substitution: 'XC'},
    {value: 50, substitution: 'L'},
    {value: 40, substitution: 'XL'},
    {value: 10, substitution: 'X'},
    {value: 9, substitution: 'IX'},
    {value: 5, substitution: 'V'},
    {value: 4, substitution: 'IV'},
    {value: 1, substitution: 'I'}
  ];
  var transform = number;

  if (transform !== parseInt(transform, 10)){
    throw new TypeError('Input should be a integer number');
  }

  if (transform < 0 || transform > 4999){
    throw new RangeError('The number should be in 0 and 4999 range');
  }

  if(transform === 0){
    answer = 'nulla';
  }

  if (transform >= 1) {
    romanNumbers.forEach(function (romanNumber) {
      for (; transform >= romanNumber.value; transform -= romanNumber.value) {
        answer += romanNumber.substitution;
      }
    });
  }

  return answer;
};
