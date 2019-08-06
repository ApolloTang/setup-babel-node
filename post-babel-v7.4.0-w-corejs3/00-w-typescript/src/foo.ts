interface Foo {
  foo: string
}
let a:Foo = {foo:'foo'};
console.log('hello typescript: ', a.foo)

let createIterator = function *(items:any) {
    for (let i=0; i < items.length; i++) {
        yield items[i];
    }
};

let iterator = createIterator([1, 2, 3]);

console.log(iterator.next());           // { value: 1, done: false }
console.log(iterator.next());           // { value: 2, done: false }
console.log(iterator.next());           // { value: 3, done: false }
console.log(iterator.next());           // { value: undefined, done: true }

const set = new Set([1, 2, 3]);
console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
