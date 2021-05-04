# Input Mask in Vanilla Javascript

This project was created to discover some methods to create a mask for input without using any framework or library.
With that, a small class was created to use as a wrapper in inputs, where a mask made of # and a regular expression is added to define which characters are allowed.

```js
    const mask = new InputMask(inputElement, maskString, regExpression);
```

