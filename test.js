import test from 'ava';
import { getFunctionName } from './index.js';

test('getFunctionName should return the name of a named function', t => {
  function myFunction() { }
  const result = getFunctionName(myFunction);
  t.is(result, 'myFunction');
});

test('getFunctionName should return an empty string for anonymous functions', t => {
  const anonymousFunction = function () { };
  const result = getFunctionName(anonymousFunction);
  t.is(result, '');
});

test('getFunctionName should return an empty string for arrow functions', t => {
  const arrowFunction = () => { };
  const result = getFunctionName(arrowFunction);
  t.is(result, '');
});

test('getFunctionName should return the display name if it is set', t => {
  const namedFunction = function () { };
  namedFunction.displayName = 'CustomName';
  const result = getFunctionName(namedFunction);
  t.is(result, 'CustomName');
});

test('getFunctionName should throw a TypeError if the argument is not a function', t => {
  const error = t.throws(() => {
    getFunctionName(123);
  }, { instanceOf: TypeError });
  t.is(error.message, 'Argument must be a function');
});
