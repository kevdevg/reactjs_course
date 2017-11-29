const { List } = require('immutable')
const a = List([1, 3, 4, 6, 12, 15, 23, 20 ]);
const b = List(['a', 'once a time', 'machine learning', 'beer', 'bear', 'beat']);
const c = List([ { key1: 'abc' }, { key2: 1.2 }, { key3: false }, { key4: null }, { key5: undefined }, { key6: '' }]);
//a 
const odd_numbers = a.filter(n => n % 2 == 0);
console.log("a", odd_numbers)
//b
const double_numbers = a.map(n => n * 2);
console.log("b", double_numbers)
//c
const be_includes_values = b.filter(n => n.includes("be"));
console.log("c", be_includes_values)
// d
const false_values = c.filter(v => {
    return v[Object.keys(v)[0]] == false;
});
console.log("c", false_values)