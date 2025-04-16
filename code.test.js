const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(e(1) === 2);
assert(e(4) === 2.708333333333333);
assert(e(8) === 2.71827876984127);
assert(e(9) === 2.7182815255731922);
assert(e(10) === 2.7182818011463845);
