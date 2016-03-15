# Roman Numbers Converter
[![Build Status](https://travis-ci.org/vcostin/roman-numbers.svg?branch=master)](https://travis-ci.org/vcostin/roman-numbers)

TDD cata for roman-numbers, and it's working, at least  from 0 til 4999, btw I found out that zero is "nulla" in latin


## Usage
```javascript
var romanNumber = require('@vcostin/roman-numbers');
console.log(romanNumber(1999));
//MCMXCIX
```
### TODO
I guess I can make this functionality with a callback, but not sure if it's needed 

### Coverage
```bash 
mocha --require blanket -R html-cov > coverage.html
```
you can look, I don't want to add report to git 

### why!?
I know that are a lot of implementations of this algorithm, this is my TDD Kata, You can use if you like it, but this is just an workout, of course it's well tested ;)
