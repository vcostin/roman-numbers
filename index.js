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
  const MIN = 0, MAX = 4999;
  var transform = number;

  if (transform !== parseInt(transform, 10)){
    throw new TypeError('Input should be a integer number');
  }

  if (transform < MIN || transform > MAX){
    throw new RangeError('The number should be in '+ MIN +' and ' + MAX+ ' range');
  }

  if(transform === MIN){
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
