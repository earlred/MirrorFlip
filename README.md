# MirrorFlip Functions

The MirrorFlip functions provide an easy way to flip a string to its mirror image string and then unmirrorFlip to reverse it back to its normal orientation. These functions can be used in various projects where mirror flipping of strings is required.

## Functions

### `mirrorFlip(str: string): string`

The `mirrorFlip` function takes a string `str` as input and returns its mirror image string. For example, the input string `'Hello'` would return `'ollɘʜ'`. The function uses Unicode character encoding to flip the string.

##### Example Usage:

```javascript
const testStr = 'Hello';
const mirroredResult = mirrorFlip(testStr);
console.log(testStr, mirroredResult); // Hello ollɘʜ
```

### `unmirrorFlip(str: string): string`

The unmirrorFlip function takes a mirror flipped string str as input and returns its original string. For example, the input string 'ollɘʜ' would return 'Hello'. The function reverses the Unicode character encoding to restore the original string.

```javascript
const mirroredStr = 'ollɘʜ';
const unmirroredResult = unmirrorFlip(mirroredStr);
console.log(mirroredStr, unmirroredResult); // ollɘʜ Hello
```

# Installation

To use the MirrorFlip functions in your project, simply copy the code and paste it in your source code file.

# License

The MirrorFlip functions are released under the MIT license.