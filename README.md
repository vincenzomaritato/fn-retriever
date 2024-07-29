# fn-retriever

`fn-retriever` is a lightweight JavaScript utility for retrieving the name of a named function. It supports a variety of function types, including named functions, anonymous functions, arrow functions, and class methods.

## Installation

You can install `fn-retriever` using npm:

```bash
npm install fn-retriever
```

## Usage

Import the `getFunctionName` function from the `fn-retriever` package and use it to retrieve the name of any named function.

### Example

```javascript
import { getFunctionName } from "fn-retriever";

// Named function
function myFunction() {}
console.log(getFunctionName(myFunction)); // Output: 'myFunction'

// Anonymous function
const anonymousFunction = function () {};
console.log(getFunctionName(anonymousFunction)); // Output: ''

// Arrow function
const arrowFunction = () => {};
console.log(getFunctionName(arrowFunction)); // Output: ''

// Function with display name
const namedFunction = function () {};
namedFunction.displayName = "CustomName";
console.log(getFunctionName(namedFunction)); // Output: 'CustomName'

// Function assigned to a variable
const namedVariableFunction = function myNamedFunction() {};
console.log(getFunctionName(namedVariableFunction)); // Output: 'myNamedFunction'

// Class method
class MyClass {
  myMethod() {}
}
const instance = new MyClass();
console.log(getFunctionName(instance.myMethod)); // Output: 'myMethod'

// Anonymous class method
class AnotherClass {
  myMethod = function () {};
}
const anotherInstance = new AnotherClass();
console.log(getFunctionName(anotherInstance.myMethod)); // Output: ''
```

## API

### `getFunctionName(fn)`

Retrieves the name of a named function.

#### Parameters

- `fn` (`Function`): The function whose name is to be retrieved.

#### Returns

- `string`: The name of the function. Returns an empty string if the function is anonymous or if an error occurs.

#### Throws

- `TypeError`: If the argument is not a function.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to improve this package.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
