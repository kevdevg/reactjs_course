// Class 1 
const fp = require('lodash/fp');
const a = [1, 3, 4, 6, 12, 15, 23, 20];
const b = ['a', 'once a time', 'machine learning', 'beer', 'bear', 'beat']
const c = [ { key1: 'abc' }, { key2: 1.2 }, { key3: false }, { key4: null }, { key5: undefined }, { key6: '' }];
// A
const odd_numbers = fp.filter(n => n % 2 == 0)(a);
console.log("a", odd_numbers);
// B
const double_values = fp.map(n => n * 2)(a);
console.log("b", double_values);
// C
const be_inclues_values = fp.filter(n => n.includes('be'))(b);
console.log("c", be_inclues_values);
// D
const false_values = fp.filter(v => {
    return v[Object.keys(v)[0]] == false;
})(c);
console.log("d", false_values);
