function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var deburr$3 = {};

var deburr$2 = {};

var hasRequiredDeburr$2;

function requireDeburr$2 () {
	if (hasRequiredDeburr$2) return deburr$2;
	hasRequiredDeburr$2 = 1;
	//#region src/string/deburr.ts
	const deburrMap = new Map([
		["Æ", "Ae"],
		["Ð", "D"],
		["Ø", "O"],
		["Þ", "Th"],
		["ß", "ss"],
		["æ", "ae"],
		["ð", "d"],
		["ø", "o"],
		["þ", "th"],
		["Đ", "D"],
		["đ", "d"],
		["Ħ", "H"],
		["ħ", "h"],
		["ı", "i"],
		["Ĳ", "IJ"],
		["ĳ", "ij"],
		["ĸ", "k"],
		["Ŀ", "L"],
		["ŀ", "l"],
		["Ł", "L"],
		["ł", "l"],
		["ŉ", "'n"],
		["Ŋ", "N"],
		["ŋ", "n"],
		["Œ", "Oe"],
		["œ", "oe"],
		["Ŧ", "T"],
		["ŧ", "t"],
		["ſ", "s"]
	]);
	/**
	* Converts a string by replacing special characters and diacritical marks with their ASCII equivalents.
	* For example, "Crème brûlée" becomes "Creme brulee".
	*
	* @param {string} str - The input string to be deburred.
	* @returns {string} - The deburred string with special characters replaced by their ASCII equivalents.
	*
	* @example
	* // Basic usage:
	* deburr('Æthelred') // returns 'Aethelred'
	*
	* @example
	* // Handling diacritical marks:
	* deburr('München') // returns 'Munchen'
	*
	* @example
	* // Special characters:
	* deburr('Crème brûlée') // returns 'Creme brulee'
	*/
	function deburr(str) {
		str = str.normalize("NFD");
		let result = "";
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			if (char >= "̀" && char <= "ͯ" || char >= "︠" && char <= "︣") continue;
			result += deburrMap.get(char) ?? char;
		}
		return result;
	}
	//#endregion
	deburr$2.deburr = deburr;
	return deburr$2;
}

var toString$1 = {};

var hasRequiredToString;

function requireToString () {
	if (hasRequiredToString) return toString$1;
	hasRequiredToString = 1;
	//#region src/compat/util/toString.ts
	/**
	* Converts `value` to a string.
	*
	* An empty string is returned for `null` and `undefined` values.
	* The sign of `-0` is preserved.
	*
	* @param {any} value - The value to convert.
	* @returns {string} Returns the converted string.
	*
	* @example
	* toString(null) // returns ''
	* toString(undefined) // returns ''
	* toString(-0) // returns '-0'
	* toString([1, 2, -0]) // returns '1,2,-0'
	* toString([Symbol('a'), Symbol('b')]) // returns 'Symbol(a),Symbol(b)'
	*/
	function toString(value) {
		if (value == null) return "";
		if (typeof value === "string") return value;
		if (Array.isArray(value)) return value.map(toString).join(",");
		const result = String(value);
		if (result === "0" && Object.is(Number(value), -0)) return "-0";
		return result;
	}
	//#endregion
	toString$1.toString = toString;
	return toString$1;
}

var hasRequiredDeburr$1;

function requireDeburr$1 () {
	if (hasRequiredDeburr$1) return deburr$3;
	hasRequiredDeburr$1 = 1;
	const require_deburr = /*@__PURE__*/ requireDeburr$2();
	const require_toString = /*@__PURE__*/ requireToString();
	//#region src/compat/string/deburr.ts
	/**
	* Converts a string by replacing special characters and diacritical marks with their ASCII equivalents.
	* For example, "Crème brûlée" becomes "Creme brulee".
	*
	* @param {string} str - The input string to be deburred.
	* @returns {string} - The deburred string with special characters replaced by their ASCII equivalents.
	*
	* @example
	* // Basic usage:
	* deburr('Æthelred') // returns 'Aethelred'
	*
	* @example
	* // Handling diacritical marks:
	* deburr('München') // returns 'Munchen'
	*
	* @example
	* // Special characters:
	* deburr('Crème brûlée') // returns 'Creme brulee'
	*/
	function deburr(str) {
		return require_deburr.deburr(require_toString.toString(str));
	}
	//#endregion
	deburr$3.deburr = deburr;
	return deburr$3;
}

var deburr$1;
var hasRequiredDeburr;

function requireDeburr () {
	if (hasRequiredDeburr) return deburr$1;
	hasRequiredDeburr = 1;
	deburr$1 = /*@__PURE__*/ requireDeburr$1().deburr;
	return deburr$1;
}

var deburrExports = /*@__PURE__*/ requireDeburr();
const deburr = /*@__PURE__*/getDefaultExportFromCjs(deburrExports);

function clean_terms(input) {
  return (input || "").toLocaleLowerCase().split(" ").map((v) => v.trim()).flatMap((v) => [v, deburr(v)]).filter((value, index, array) => value && array.indexOf(value) === index);
}

//#region src/compat/predicate/isSymbol.ts
/**
* Check whether a value is a symbol.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `symbol`.
*
* @param {unknown} value The value to check.
* @returns {value is symbol} Returns `true` if `value` is a symbol, else `false`.
* @example
* isSymbol(Symbol.iterator);
* // => true
*
* isSymbol('abc');
* // => false
*/
function isSymbol(value) {
	return typeof value === "symbol" || value instanceof Symbol;
}

//#region src/compat/util/toNumber.ts
/**
* Converts `value` to a number.
*
* Unlike `Number()`, this function returns `NaN` for symbols.
*
* @param {unknown} value - The value to convert.
* @returns {number} Returns the number.
*
* @example
* toNumber(3.2); // => 3.2
* toNumber(Number.MIN_VALUE); // => 5e-324
* toNumber(Infinity); // => Infinity
* toNumber('3.2'); // => 3.2
* toNumber(Symbol.iterator); // => NaN
* toNumber(NaN); // => NaN
*/
function toNumber(value) {
	if (isSymbol(value)) return NaN;
	return Number(value);
}

//#region src/compat/util/toFinite.ts
/**
* Converts `value` to a finite number.
*
* @param {unknown} value - The value to convert.
* @returns {number} Returns the number.
*
* @example
* toFinite(3.2); // => 3.2
* toFinite(Number.MIN_VALUE); // => 5e-324
* toFinite(Infinity); // => 1.7976931348623157e+308
* toFinite('3.2'); // => 3.2
* toFinite(Symbol.iterator); // => 0
* toFinite(NaN); // => 0
*/
function toFinite(value) {
	if (!value) return value === 0 ? value : 0;
	value = toNumber(value);
	if (value === Infinity || value === -Infinity) return (value < 0 ? -1 : 1) * Number.MAX_VALUE;
	return value === value ? value : 0;
}

//#region src/compat/util/toInteger.ts
/**
* Converts `value` to an integer.
*
* This function first converts `value` to a finite number. If the result has any decimal places,
* they are removed by rounding down to the nearest whole number.
*
* @param {unknown} value - The value to convert.
* @returns {number} Returns the number.
*
* @example
* toInteger(3.2); // => 3
* toInteger(Number.MIN_VALUE); // => 0
* toInteger(Infinity); // => 1.7976931348623157e+308
* toInteger('3.2'); // => 3
* toInteger(Symbol.iterator); // => 0
* toInteger(NaN); // => 0
*/
function toInteger(value) {
	const finite = toFinite(value);
	const remainder = finite % 1;
	return remainder ? finite - remainder : finite;
}

//#region src/_internal/isEqualsSameValueZero.ts
/**
* Performs a `SameValueZero` comparison between two values to determine if they are equivalent.
*
* @param {any} value - The value to compare.
* @param {any} other - The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
*
* @example
* eq(1, 1); // true
* eq(0, -0); // true
* eq(NaN, NaN); // true
* eq('a', Object('a')); // false
*/
function isEqualsSameValueZero(value, other) {
	return value === other || Number.isNaN(value) && Number.isNaN(other);
}

//#region src/compat/_internal/getSymbols.ts
function getSymbols(object) {
	return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}

//#region src/compat/_internal/getTag.ts
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {T} value The value to query.
* @returns {string} Returns the `Object.prototype.toString.call` result.
*/
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}

//#region src/compat/_internal/tags.ts
const regexpTag = "[object RegExp]";
const stringTag = "[object String]";
const numberTag = "[object Number]";
const booleanTag = "[object Boolean]";
const argumentsTag = "[object Arguments]";
const symbolTag = "[object Symbol]";
const dateTag = "[object Date]";
const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const arrayBufferTag = "[object ArrayBuffer]";
const objectTag = "[object Object]";
const dataViewTag = "[object DataView]";
const uint8ArrayTag = "[object Uint8Array]";
const uint8ClampedArrayTag = "[object Uint8ClampedArray]";
const uint16ArrayTag = "[object Uint16Array]";
const uint32ArrayTag = "[object Uint32Array]";
const int8ArrayTag = "[object Int8Array]";
const int16ArrayTag = "[object Int16Array]";
const int32ArrayTag = "[object Int32Array]";
const float32ArrayTag = "[object Float32Array]";
const float64ArrayTag = "[object Float64Array]";

//#region src/_internal/globalThis.ts
const globalThis_ = typeof globalThis === "object" && globalThis || typeof window === "object" && window || typeof self === "object" && self || typeof global === "object" && global || (function() {
	return this;
})() || Function("return this")();

//#region src/predicate/isBuffer.ts
/**
* Checks if the given value is a Buffer instance.
*
* This function tests whether the provided value is an instance of Buffer.
* It returns `true` if the value is a Buffer, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `Buffer`.
*
* @param {unknown} x - The value to check if it is a Buffer.
* @returns {boolean} Returns `true` if `x` is a Buffer, else `false`.
*
* @example
* const buffer = Buffer.from("test");
* console.log(isBuffer(buffer)); // true
*
* const notBuffer = "not a buffer";
* console.log(isBuffer(notBuffer)); // false
*/
function isBuffer(x) {
	return typeof globalThis_.Buffer !== "undefined" && globalThis_.Buffer.isBuffer(x);
}

//#region src/predicate/isLength.ts
/**
* Checks if a given value is a valid length.
*
* A valid length is of type `number`, is a non-negative integer, and is less than or equal to
* JavaScript's maximum safe integer (`Number.MAX_SAFE_INTEGER`).
* It returns `true` if the value is a valid length, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the
* argument to a valid length (`number`).
*
* @param {any} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
*
* @example
* isLength(0); // true
* isLength(42); // true
* isLength(-1); // false
* isLength(1.5); // false
* isLength(Number.MAX_SAFE_INTEGER); // true
* isLength(Number.MAX_SAFE_INTEGER + 1); // false
*/
function isLength(value) {
	return Number.isSafeInteger(value) && value >= 0;
}

//#region src/compat/predicate/isArrayLike.ts
/**
* Checks if `value` is array-like.
*
* @param {any} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
*
* @example
* isArrayLike([1, 2, 3]); // true
* isArrayLike('abc'); // true
* isArrayLike({ 0: 'a', length: 1 }); // true
* isArrayLike({}); // false
* isArrayLike(null); // false
* isArrayLike(undefined); // false
*/
function isArrayLike(value) {
	return value != null && typeof value !== "function" && isLength(value.length);
}

//#region src/array/flatten.ts
/**
* Flattens an array up to the specified depth.
*
* @template T - The type of elements within the array.
* @template D - The depth to which the array should be flattened.
* @param {T[]} arr - The array to flatten.
* @param {D} depth - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
* @returns {Array<FlatArray<T[], D>>} A new array that has been flattened.
*
* @example
* const arr = flatten([1, [2, 3], [4, [5, 6]]], 1);
* // Returns: [1, 2, 3, 4, [5, 6]]
*
* const arr = flatten([1, [2, 3], [4, [5, 6]]], 2);
* // Returns: [1, 2, 3, 4, 5, 6]
*/
function flatten(arr, depth = 1) {
	const result = [];
	const flooredDepth = Math.floor(depth);
	const recursive = (arr, currentDepth) => {
		for (let i = 0; i < arr.length; i++) {
			const item = arr[i];
			if (Array.isArray(item) && currentDepth < flooredDepth) recursive(item, currentDepth + 1);
			else result.push(item);
		}
	};
	recursive(arr, 0);
	return result;
}

//#region src/compat/util/toString.ts
/**
* Converts `value` to a string.
*
* An empty string is returned for `null` and `undefined` values.
* The sign of `-0` is preserved.
*
* @param {any} value - The value to convert.
* @returns {string} Returns the converted string.
*
* @example
* toString(null) // returns ''
* toString(undefined) // returns ''
* toString(-0) // returns '-0'
* toString([1, 2, -0]) // returns '1,2,-0'
* toString([Symbol('a'), Symbol('b')]) // returns 'Symbol(a),Symbol(b)'
*/
function toString(value) {
	if (value == null) return "";
	if (typeof value === "string") return value;
	if (Array.isArray(value)) return value.map(toString).join(",");
	const result = String(value);
	if (result === "0" && Object.is(Number(value), -0)) return "-0";
	return result;
}

//#region src/compat/_internal/toKey.ts
/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
	if (typeof value === "string" || typeof value === "symbol") return value;
	if (Object.is(value?.valueOf?.(), -0)) return "-0";
	return String(value);
}

//#region src/compat/util/toPath.ts
/**
* Converts a deep key string into an array of path segments.
*
* This function takes a string representing a deep key (e.g., 'a.b.c' or 'a[b][c]') and breaks it down into an array of strings, each representing a segment of the path.
*
* @param {any} deepKey - The deep key string to convert.
* @returns {string[]} An array of strings, each representing a segment of the path.
*
* Examples:
*
* toPath('a.b.c') // Returns ['a', 'b', 'c']
* toPath('a[b][c]') // Returns ['a', 'b', 'c']
* toPath('.a.b.c') // Returns ['', 'a', 'b', 'c']
* toPath('a["b.c"].d') // Returns ['a', 'b.c', 'd']
* toPath('') // Returns []
* toPath('.a[b].c.d[e]["f.g"].h') // Returns ['', 'a', 'b', 'c', 'd', 'e', 'f.g', 'h']
*/
function toPath(deepKey) {
	if (Array.isArray(deepKey)) return deepKey.map(toKey);
	if (typeof deepKey === "symbol") return [deepKey];
	deepKey = toString(deepKey);
	const result = [];
	const length = deepKey.length;
	if (length === 0) return result;
	let index = 0;
	let key = "";
	let quoteChar = "";
	let bracket = false;
	if (deepKey.charCodeAt(0) === 46) {
		result.push("");
		index++;
	}
	while (index < length) {
		const char = deepKey[index];
		if (quoteChar) if (char === "\\" && index + 1 < length) {
			index++;
			key += deepKey[index];
		} else if (char === quoteChar) quoteChar = "";
		else key += char;
		else if (bracket) if (char === "\"" || char === "'") quoteChar = char;
		else if (char === "]") {
			bracket = false;
			result.push(key);
			key = "";
		} else key += char;
		else if (char === "[") {
			bracket = true;
			if (key) {
				result.push(key);
				key = "";
			}
		} else if (char === ".") {
			if (key) {
				result.push(key);
				key = "";
			}
		} else key += char;
		index++;
	}
	if (key) result.push(key);
	return result;
}

//#region src/_internal/isUnsafeProperty.ts
/**
* Checks if a property key is unsafe to modify directly.
*
* This function is used in functions like `merge` to prevent prototype pollution attacks
* by identifying property keys that could modify the object's prototype chain or constructor.
*
* @param key - The property key to check
* @returns `true` if the property is unsafe to modify directly, `false` otherwise
* @internal
*/
function isUnsafeProperty(key) {
	return key === "__proto__";
}

//#region src/compat/_internal/isDeepKey.ts
/**
* Checks if a given key is a deep key.
*
* A deep key is a string that contains a dot (.) or square brackets with a property accessor.
*
* @param {PropertyKey} key - The key to check.
* @returns {boolean} - Returns true if the key is a deep key, otherwise false.
*
* Examples:
*
* isDeepKey('a.b') // true
* isDeepKey('a[b]') // true
* isDeepKey('a') // false
* isDeepKey(123) // false
* isDeepKey('a.b.c') // true
* isDeepKey('a[b][c]') // true
*/
function isDeepKey(key) {
	switch (typeof key) {
		case "number":
		case "symbol": return false;
		case "string": return key.includes(".") || key.includes("[") || key.includes("]");
	}
}

//#region src/compat/object/get.ts
/**
* Retrieves the value at a given path from an object. If the resolved value is undefined, the defaultValue is returned instead.
*
* @param {any} object - The object to query.
* @param {PropertyKey | readonly PropertyKey[]} path - The path of the property to get.
* @param {any} [defaultValue] - The value returned if the resolved value is undefined.
* @returns {any} Returns the resolved value.
*
* @example
* const object = { a: { b: { c: 1 } } };
* get(object, 'a.b.c');
* // => 1
*
* get(object, ['a', 'b', 'c']);
* // => 1
*
* get(object, 'a.b.d', 'default');
* // => 'default'
*/
function get(object, path, defaultValue) {
	if (object == null) return defaultValue;
	switch (typeof path) {
		case "string": {
			if (isUnsafeProperty(path)) return defaultValue;
			const result = object[path];
			if (result === void 0) if (isDeepKey(path)) return get(object, toPath(path), defaultValue);
			else return defaultValue;
			return result;
		}
		case "number":
		case "symbol": {
			if (typeof path === "number") path = toKey(path);
			const result = object[path];
			if (result === void 0) return defaultValue;
			return result;
		}
		default: {
			if (Array.isArray(path)) return getWithPath(object, path, defaultValue);
			if (Object.is(path?.valueOf(), -0)) path = "-0";
			else path = String(path);
			if (isUnsafeProperty(path)) return defaultValue;
			const result = object[path];
			if (result === void 0) return defaultValue;
			return result;
		}
	}
}
function getWithPath(object, path, defaultValue) {
	if (path.length === 0) return defaultValue;
	let current = object;
	for (let index = 0; index < path.length; index++) {
		if (current == null) return defaultValue;
		if (isUnsafeProperty(path[index])) return defaultValue;
		current = current[path[index]];
	}
	if (current === void 0) return defaultValue;
	return current;
}

//#region src/compat/object/property.ts
/**
* Creates a function that returns the value at a given path of an object.
*
* @template T - The type of object.
* @template R - The type of the value to return.
* @param {PropertyPath} path - The path of the property to get.
* @returns {(object: T) => R} - Returns a new function that takes an object and returns the value at the specified path.
*
* @example
* const getObjectValue = property('a.b.c');
* const result = getObjectValue({ a: { b: { c: 3 } } });
* console.log(result); // => 3
*
* @example
* const getObjectValue = property(['a', 'b', 'c']);
* const result = getObjectValue({ a: { b: { c: 3 } } });
* console.log(result); // => 3
*/
function property(path) {
	return function(object) {
		return get(object, path);
	};
}

//#region src/compat/predicate/isObject.ts
/**
* Checks if the given value is an object. An object is a value that is
* not a primitive type (string, number, boolean, symbol, null, or undefined).
*
* This function tests whether the provided value is an object or not.
* It returns `true` if the value is an object, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to an object value.
*
* @param {any} value - The value to check if it is an object.
* @returns {value is object} `true` if the value is an object, `false` otherwise.
*
* @example
* const value1 = {};
* const value2 = [1, 2, 3];
* const value3 = () => {};
* const value4 = null;
*
* console.log(isObject(value1)); // true
* console.log(isObject(value2)); // true
* console.log(isObject(value3)); // true
* console.log(isObject(value4)); // false
*/
function isObject(value) {
	return value !== null && (typeof value === "object" || typeof value === "function");
}

//#region src/predicate/isPrimitive.ts
/**
* Checks whether a value is a JavaScript primitive.
* JavaScript primitives include null, undefined, strings, numbers, booleans, symbols, and bigints.
*
* @param {unknown} value The value to check.
* @returns {value is
*     null
*   | undefined
*   | string
*   | number
*   | boolean
*   | symbol
*   | bigint} Returns true if `value` is a primitive, false otherwise.
*
* @example
* isPrimitive(null); // true
* isPrimitive(undefined); // true
* isPrimitive('123'); // true
* isPrimitive(false); // true
* isPrimitive(true); // true
* isPrimitive(Symbol('a')); // true
* isPrimitive(123n); // true
* isPrimitive({}); // false
* isPrimitive(new Date()); // false
* isPrimitive(new Map()); // false
* isPrimitive(new Set()); // false
* isPrimitive([1, 2, 3]); // false
*/
function isPrimitive(value) {
	return value == null || typeof value !== "object" && typeof value !== "function";
}

//#region src/compat/predicate/isMatchWith.ts
/**
* Performs a deep comparison between a target value and a source pattern to determine if they match,
* using a custom comparison function for fine-grained control over the matching logic.
*
* This function recursively traverses both values, calling the custom compare function for each
* property/element pair. If the compare function returns a boolean, that result is used directly.
* If it returns undefined, the default matching behavior continues recursively.
*
* The matching behavior varies by data type:
* - **Objects**: Matches if all properties in the source exist in the target and match
* - **Arrays**: Matches if all elements in the source array can be found in the target array (order-independent)
* - **Maps**: Matches if all key-value pairs in the source Map exist and match in the target Map
* - **Sets**: Matches if all elements in the source Set can be found in the target Set
* - **Functions**: Matches using strict equality, or object comparison if the function has properties
* - **Primitives**: Matches using strict equality
*
* Special cases:
* - Empty objects, arrays, Maps, and Sets always match any target
* - `null` and `undefined` source values have specific matching rules
* - Circular references are handled using an internal stack to prevent infinite recursion
*
* @param {object} target - The value to be tested for matching
* @param {object} source - The pattern/template to match against
* @param {function} [compare] - Optional custom comparison function that receives:
*   - `objValue` - The value from the target at the current path
*   - `srcValue` - The value from the source at the current path
*   - `key` - The property key or array index being compared
*   - `object` - The parent object/array from the target
*   - `source` - The parent object/array from the source
*   - `stack` - Internal Map used for circular reference detection
*   Should return `true` for a match, `false` for no match, or `undefined` to continue with default behavior
*
* @returns {boolean} `true` if the target matches the source pattern, `false` otherwise
*
* @example
* // Basic matching without custom comparator
* isMatchWith({ a: 1, b: 2 }, { a: 1 }); // true
* isMatchWith([1, 2, 3], [1, 3]); // true
*
* @example
* // Custom comparison for case-insensitive string matching
* const caseInsensitiveCompare = (objVal, srcVal) => {
*   if (typeof objVal === 'string' && typeof srcVal === 'string') {
*     return objVal.toLowerCase() === srcVal.toLowerCase();
*   }
*   return undefined; // Use default behavior for non-strings
* };
*
* isMatchWith(
*   { name: 'JOHN', age: 30 },
*   { name: 'john' },
*   caseInsensitiveCompare
* ); // true
*
* @example
* // Custom comparison for range matching
* const rangeCompare = (objVal, srcVal, key) => {
*   if (key === 'age' && typeof srcVal === 'object' && srcVal.min !== undefined) {
*     return objVal >= srcVal.min && objVal <= srcVal.max;
*   }
*   return undefined;
* };
*
* isMatchWith(
*   { name: 'John', age: 25 },
*   { age: { min: 18, max: 30 } },
*   rangeCompare
* ); // true
*/
function isMatchWith(target, source, compare) {
	if (typeof compare !== "function") return isMatchWith(target, source, () => void 0);
	return isMatchWithInternal(target, source, function doesMatch(objValue, srcValue, key, object, source, stack) {
		const isEqual = compare(objValue, srcValue, key, object, source, stack);
		if (isEqual !== void 0) return Boolean(isEqual);
		return isMatchWithInternal(objValue, srcValue, doesMatch, stack);
	}, /* @__PURE__ */ new Map());
}
function isMatchWithInternal(target, source, compare, stack) {
	if (source === target) return true;
	switch (typeof source) {
		case "object": return isObjectMatch(target, source, compare, stack);
		case "function":
			if (Object.keys(source).length > 0) return isMatchWithInternal(target, { ...source }, compare, stack);
			return isEqualsSameValueZero(target, source);
		default:
			if (!isObject(target)) return isEqualsSameValueZero(target, source);
			if (typeof source === "string") return source === "";
			return true;
	}
}
function isObjectMatch(target, source, compare, stack) {
	if (source == null) return true;
	if (Array.isArray(source)) return isArrayMatch(target, source, compare, stack);
	if (source instanceof Map) return isMapMatch(target, source, compare, stack);
	if (source instanceof Set) return isSetMatch(target, source, compare, stack);
	const keys = Object.keys(source);
	if (target == null || isPrimitive(target)) return keys.length === 0;
	if (keys.length === 0) return true;
	if (stack?.has(source)) return stack.get(source) === target;
	stack?.set(source, target);
	try {
		for (let i = 0; i < keys.length; i++) {
			const key = keys[i];
			if (!isPrimitive(target) && !(key in target)) return false;
			if (source[key] === void 0 && target[key] !== void 0) return false;
			if (source[key] === null && target[key] !== null) return false;
			if (!compare(target[key], source[key], key, target, source, stack)) return false;
		}
		return true;
	} finally {
		stack?.delete(source);
	}
}
function isMapMatch(target, source, compare, stack) {
	if (source.size === 0) return true;
	if (!(target instanceof Map)) return false;
	for (const [key, sourceValue] of source.entries()) if (compare(target.get(key), sourceValue, key, target, source, stack) === false) return false;
	return true;
}
function isArrayMatch(target, source, compare, stack) {
	if (source.length === 0) return true;
	if (!Array.isArray(target)) return false;
	const countedIndex = /* @__PURE__ */ new Set();
	for (let i = 0; i < source.length; i++) {
		const sourceItem = source[i];
		let found = false;
		for (let j = 0; j < target.length; j++) {
			if (countedIndex.has(j)) continue;
			const targetItem = target[j];
			let matches = false;
			if (compare(targetItem, sourceItem, i, target, source, stack)) matches = true;
			if (matches) {
				countedIndex.add(j);
				found = true;
				break;
			}
		}
		if (!found) return false;
	}
	return true;
}
function isSetMatch(target, source, compare, stack) {
	if (source.size === 0) return true;
	if (!(target instanceof Set)) return false;
	return isArrayMatch([...target], [...source], compare, stack);
}

//#region src/compat/predicate/isMatch.ts
/**
* Checks if the target matches the source by comparing their structures and values.
* This function supports deep comparison for objects, arrays, maps, and sets.
*
* @param {object} target - The target value to match against.
* @param {object} source - The source value to match with.
* @returns {boolean} - Returns `true` if the target matches the source, otherwise `false`.
*
* @example
* // Basic usage
* isMatch({ a: 1, b: 2 }, { a: 1 }); // true
*
* @example
* // Matching arrays
* isMatch([1, 2, 3], [1, 2, 3]); // true
*
* @example
* // Matching maps
* const targetMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
* const sourceMap = new Map([['key1', 'value1']]);
* isMatch(targetMap, sourceMap); // true
*
* @example
* // Matching sets
* const targetSet = new Set([1, 2, 3]);
* const sourceSet = new Set([1, 2]);
* isMatch(targetSet, sourceSet); // true
*/
function isMatch(target, source) {
	return isMatchWith(target, source, () => void 0);
}

//#region src/predicate/isTypedArray.ts
/**
* Checks if a value is a TypedArray.
* @param {unknown} x The value to check.
* @returns {x is
*     Uint8Array
*   | Uint8ClampedArray
*   | Uint16Array
*   | Uint32Array
*   | BigUint64Array
*   | Int8Array
*   | Int16Array
*   | Int32Array
*   | BigInt64Array
*   | Float32Array
*   | Float64Array} Returns true if `x` is a TypedArray, false otherwise.
*
* @example
* const arr = new Uint8Array([1, 2, 3]);
* isTypedArray(arr); // true
*
* const regularArray = [1, 2, 3];
* isTypedArray(regularArray); // false
*
* const buffer = new ArrayBuffer(16);
* isTypedArray(buffer); // false
*/
function isTypedArray$1(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

//#region src/object/cloneDeepWith.ts
/**
* Deeply clones the given object.
*
* You can customize the deep cloning process using the `cloneValue` function.
* The function takes the current value `value`, the property name `key`, and the entire object `obj` as arguments.
* If the function returns a value, that value is used;
* if it returns `undefined`, the default cloning method is used.
*
* @template T - The type of the object.
* @param {T} obj - The object to clone.
* @param {Function} [cloneValue] - A function to customize the cloning process.
* @returns {T} - A deep clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = cloneDeepWith(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an object with a customizer
* const obj = { a: 1, b: 2 };
* const clonedObj = cloneDeepWith(obj, (value) => {
*   if (typeof value === 'number') {
*     return value * 2; // Double the number
*   }
* });
* console.log(clonedObj); // { a: 2, b: 4 }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an array with a customizer
* const arr = [1, 2, 3];
* const clonedArr = cloneDeepWith(arr, (value) => {
*   return value + 1; // Increment each value
* });
* console.log(clonedArr); // [2, 3, 4]
* console.log(clonedArr === arr); // false
*/
function cloneDeepWith$1(obj, cloneValue) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
}
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
	const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
	if (cloned !== void 0) return cloned;
	if (isPrimitive(valueToClone)) return valueToClone;
	if (stack.has(valueToClone)) return stack.get(valueToClone);
	if (Array.isArray(valueToClone)) {
		const result = new Array(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		if (Object.hasOwn(valueToClone, "index")) result.index = valueToClone.index;
		if (Object.hasOwn(valueToClone, "input")) result.input = valueToClone.input;
		return result;
	}
	if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
	if (valueToClone instanceof RegExp) {
		const result = new RegExp(valueToClone.source, valueToClone.flags);
		result.lastIndex = valueToClone.lastIndex;
		return result;
	}
	if (valueToClone instanceof Map) {
		const result = /* @__PURE__ */ new Map();
		stack.set(valueToClone, result);
		for (const [key, value] of valueToClone) result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
		return result;
	}
	if (valueToClone instanceof Set) {
		const result = /* @__PURE__ */ new Set();
		stack.set(valueToClone, result);
		for (const value of valueToClone) result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
		return result;
	}
	if (isBuffer(valueToClone)) return valueToClone.subarray();
	if (isTypedArray$1(valueToClone)) {
		const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
	if (valueToClone instanceof DataView) {
		const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof File !== "undefined" && valueToClone instanceof File) {
		const result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
		const result = new Blob([valueToClone], { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Error) {
		const result = structuredClone(valueToClone);
		stack.set(valueToClone, result);
		result.message = valueToClone.message;
		result.name = valueToClone.name;
		result.stack = valueToClone.stack;
		result.cause = valueToClone.cause;
		result.constructor = valueToClone.constructor;
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Boolean) {
		const result = new Boolean(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Number) {
		const result = new Number(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof String) {
		const result = new String(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
		const result = Object.create(Object.getPrototypeOf(valueToClone));
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
	const keys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const descriptor = Object.getOwnPropertyDescriptor(target, key);
		if (descriptor == null || descriptor.writable) target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
	}
}
function isCloneableObject(object) {
	switch (getTag(object)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return true;
		default: return false;
	}
}

//#region src/object/cloneDeep.ts
/**
* Creates a deep clone of the given object.
*
* @template T - The type of the object.
* @param {T} obj - The object to clone.
* @returns {T} - A deep clone of the given object.
*
* @example
* // Clone a primitive values
* const num = 29;
* const clonedNum = cloneDeep(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an array
* const arr = [1, 2, 3];
* const clonedArr = cloneDeep(arr);
* console.log(clonedArr); // [1, 2, 3]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an array with nested objects
* const arr = [1, { a: 1 }, [1, 2, 3]];
* const clonedArr = cloneDeep(arr);
* arr[1].a = 2;
* console.log(arr); // [1, { a: 2 }, [1, 2, 3]]
* console.log(clonedArr); // [1, { a: 1 }, [1, 2, 3]]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an object
* const obj = { a: 1, b: 'es-toolkit', c: [1, 2, 3] };
* const clonedObj = cloneDeep(obj);
* console.log(clonedObj); // { a: 1, b: 'es-toolkit', c: [1, 2, 3] }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an object with nested objects
* const obj = { a: 1, b: { c: 1 } };
* const clonedObj = cloneDeep(obj);
* obj.b.c = 2;
* console.log(obj); // { a: 1, b: { c: 2 } }
* console.log(clonedObj); // { a: 1, b: { c: 1 } }
* console.log(clonedObj === obj); // false
*/
function cloneDeep$1(obj) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
}

//#region src/compat/predicate/matches.ts
/**
* Creates a function that performs a deep comparison between a given target and the source object.
*
* @template T
* @template V
* @param {T} source - The source object to create the matcher from.
* @returns {(target: V) => boolean} Returns a function that takes a target object and returns `true` if the target matches the source, otherwise `false`.
*
* @example
* // Basic usage
* const matcher = matches({ a: 1, b: 2 });
* matcher({ a: 1, b: 2, c: 3 }); // true
* matcher({ a: 1, c: 3 }); // false
*
* @example
* // Matching arrays
* const arrayMatcher = matches([1, 2, 3]);
* arrayMatcher([1, 2, 3, 4]); // true
* arrayMatcher([4, 5, 6]); // false
*
* @example
* // Matching objects with nested structures
* const nestedMatcher = matches({ a: { b: 2 } });
* nestedMatcher({ a: { b: 2, c: 3 } }); // true
* nestedMatcher({ a: { c: 3 } }); // false
*/
function matches(source) {
	source = cloneDeep$1(source);
	return (target) => {
		return isMatch(target, source);
	};
}

//#region src/compat/object/cloneDeepWith.ts
/**
* Creates a deep clone of the given object using a customizer function.
*
* @template T - The type of the object.
* @param {T} obj - The object to clone.
* @param {Function} [cloneValue] - A function to customize the cloning process.
* @returns {T} - A deep clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = cloneDeepWith(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an object with a customizer
* const obj = { a: 1, b: 2 };
* const clonedObj = cloneDeepWith(obj, (value) => {
*   if (typeof value === 'number') {
*     return value * 2; // Double the number
*   }
* });
* console.log(clonedObj); // { a: 2, b: 4 }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an array with a customizer
* const arr = [1, 2, 3];
* const clonedArr = cloneDeepWith(arr, (value) => {
*   return value + 1; // Increment each value
* });
* console.log(clonedArr); // [2, 3, 4]
* console.log(clonedArr === arr); // false
*/
function cloneDeepWith(obj, customizer) {
	return cloneDeepWith$1(obj, (value, key, object, stack) => {
		if (typeof obj !== "object") return;
		if (getTag(obj) === "[object Object]" && typeof obj.constructor !== "function") {
			const result = {};
			stack.set(obj, result);
			copyProperties(result, obj, object, stack);
			return result;
		}
		switch (Object.prototype.toString.call(obj)) {
			case numberTag:
			case stringTag:
			case booleanTag: {
				const result = new obj.constructor(obj?.valueOf());
				copyProperties(result, obj);
				return result;
			}
			case argumentsTag: {
				const result = {};
				copyProperties(result, obj);
				result.length = obj.length;
				result[Symbol.iterator] = obj[Symbol.iterator];
				return result;
			}
			default: return;
		}
	});
}

//#region src/compat/object/cloneDeep.ts
/**
* Creates a deep clone of the given object.
*
* @template T - The type of the object.
* @param {T} obj - The object to clone.
* @returns {T} - A deep clone of the given object.
*
* @example
* // Clone a primitive values
* const num = 29;
* const clonedNum = clone(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an array
* const arr = [1, 2, 3];
* const clonedArr = clone(arr);
* console.log(clonedArr); // [1, 2, 3]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an array with nested objects
* const arr = [1, { a: 1 }, [1, 2, 3]];
* const clonedArr = clone(arr);
* arr[1].a = 2;
* console.log(arr); // [2, { a: 2 }, [1, 2, 3]]
* console.log(clonedArr); // [1, { a: 1 }, [1, 2, 3]]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an object
* const obj = { a: 1, b: 'es-toolkit', c: [1, 2, 3] };
* const clonedObj = clone(obj);
* console.log(clonedObj); // { a: 1, b: 'es-toolkit', c: [1, 2, 3] }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an object with nested objects
* const obj = { a: 1, b: { c: 1 } };
* const clonedObj = clone(obj);
* obj.b.c = 2;
* console.log(obj); // { a: 1, b: { c: 2 } }
* console.log(clonedObj); // { a: 1, b: { c: 1 } }
* console.log(clonedObj === obj); // false
*/
function cloneDeep(obj) {
	return cloneDeepWith(obj);
}

//#region src/compat/predicate/isArguments.ts
/**
* Checks if the given value is an arguments object.
*
* This function tests whether the provided value is an arguments object or not.
* It returns `true` if the value is an arguments object, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to an arguments object.
*
* @param {any} value - The value to test if it is an arguments object.
* @returns {value is IArguments} `true` if the value is an arguments, `false` otherwise.
*
* @example
* const args = (function() { return arguments; })();
* const strictArgs = (function() { 'use strict'; return arguments; })();
* const value = [1, 2, 3];
*
* console.log(isArguments(args)); // true
* console.log(isArguments(strictArgs)); // true
* console.log(isArguments(value)); // false
*/
function isArguments(value) {
	return value !== null && typeof value === "object" && getTag(value) === "[object Arguments]";
}

//#region src/compat/_internal/isIndex.ts
const IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
	switch (typeof value) {
		case "number": return Number.isInteger(value) && value >= 0 && value < length;
		case "symbol": return false;
		case "string": return IS_UNSIGNED_INTEGER.test(value);
	}
}

//#region src/compat/object/has.ts
/**
* Checks if a given path exists within an object.
*
* You can provide the path as a single property key, an array of property keys,
* or a string representing a deep path.
*
* If the path is an index and the object is an array or an arguments object, the function will verify
* if the index is valid and within the bounds of the array or arguments object, even if the array or
* arguments object is sparse (i.e., not all indexes are defined).
*
* @param {any} object - The object to query.
* @param {PropertyKey | readonly PropertyKey[]} path - The path to check. This can be a single property key,
*        an array of property keys, or a string representing a deep path.
* @returns {boolean} Returns `true` if the path exists in the object, `false` otherwise.
*
* @example
*
* const obj = { a: { b: { c: 3 } } };
*
* has(obj, 'a'); // true
* has(obj, ['a', 'b']); // true
* has(obj, ['a', 'b', 'c']); // true
* has(obj, 'a.b.c'); // true
* has(obj, 'a.b.d'); // false
* has(obj, ['a', 'b', 'c', 'd']); // false
* has([], 0); // false
* has([1, 2, 3], 2); // true
* has([1, 2, 3], 5); // false
*/
function has(object, path) {
	let resolvedPath;
	if (Array.isArray(path)) resolvedPath = path;
	else if (typeof path === "string" && isDeepKey(path) && object?.[path] == null) resolvedPath = toPath(path);
	else resolvedPath = [path];
	if (resolvedPath.length === 0) return false;
	let current = object;
	for (let i = 0; i < resolvedPath.length; i++) {
		const key = resolvedPath[i];
		if (current == null || !Object.hasOwn(current, key)) {
			if (!((Array.isArray(current) || isArguments(current)) && isIndex(key) && key < current.length)) return false;
		}
		current = current[key];
	}
	return true;
}

//#region src/compat/predicate/matchesProperty.ts
/**
* Creates a function that checks if a given target object matches a specific property value.
*
* The returned function takes a target object and determines if the property at the
* specified path within the target object is equal to the given value.
*
* @param {PropertyPath} property - The property path to check within the target object.
*     This can be a single property key or an array of property keys.
* @param {T} source - The value to compare against the property value in the target object.
*
* @returns {(target?: V) => boolean} - A function that takes a target object and returns
*     `true` if the property value at the given path in the target object matches the provided value,
*     otherwise returns `false`.
*
* @example
* // Using a single property key
* const checkName = matchesProperty('name', 'Alice');
* console.log(checkName({ name: 'Alice' })); // true
* console.log(checkName({ name: 'Bob' })); // false
*
* // Using an array of property keys
* const checkNested = matchesProperty(['address', 'city'], 'New York');
* console.log(checkNested({ address: { city: 'New York' } })); // true
* console.log(checkNested({ address: { city: 'Los Angeles' } })); // false
*/
function matchesProperty(property, source) {
	switch (typeof property) {
		case "object":
			if (Object.is(property?.valueOf(), -0)) property = "-0";
			break;
		case "number":
			property = toKey(property);
			break;
	}
	source = cloneDeep(source);
	return function(target) {
		const result = get(target, property);
		if (result === void 0) return has(target, property);
		if (source === void 0) return result === void 0;
		return isMatch(result, source);
	};
}

//#region src/function/identity.ts
/**
* Returns the input value unchanged.
*
* @template T - The type of the input value.
* @param {T} x - The value to be returned.
* @returns {T} The input value.
*
* @example
* // Returns 5
* identity(5);
*
* @example
* // Returns 'hello'
* identity('hello');
*
* @example
* // Returns { key: 'value' }
* identity({ key: 'value' });
*/
function identity(x) {
	return x;
}

//#region src/compat/util/iteratee.ts
/**
* Creates a function that returns a value from an element in a collection.
*
* You can call `iteratee` with the following types of arguments:
*
* - **Function**: Returns the function as-is, which will be called with the element from the collection.
* - **Property name**: Returns the value of the specified property from the element.
* - **Property-value pair**: Returns a boolean indicating whether the element's property matches the given value.
* - **Partial object**: Returns a boolean indicating whether the element matches the properties of the partial object.
*
* If you don't provide any arguments or pass `null`, this function will return a function that simply returns its input unchanged.
*
* @param {symbol | number | string | object | null | ((...args: any[]) => any)} value - The value to convert to an iteratee.
* @returns {(...args: any[]) => unknown} - Returns the new iteratee function.
* @example
* const func = iteratee();
* [{ a: 1 }, { a: 2 }, { a: 3 }].map(func) // => [{ a: 1 }, { a: 2 }, { a: 3 }]
*
* const func = iteratee((object) => object.a);
* [{ a: 1 }, { a: 2 }, { a: 3 }].map(func) // => [1, 2, 3]
*
* const func = iteratee('a');
* [{ a: 1 }, { a: 2 }, { a: 3 }].map(func) // => [1, 2, 3]
*
* const func = iteratee({ a: 1 });
* [{ a: 1 }, { a: 2 }, { a: 3 }].find(func) // => { a: 1 }
*
* const func = iteratee(['a', 1]);
* [{ a: 1 }, { a: 2 }, { a: 3 }].find(func) // => { a: 1 }
*/
function iteratee(value) {
	if (value == null) return identity;
	switch (typeof value) {
		case "function": return value;
		case "object":
			if (Array.isArray(value) && value.length === 2) return matchesProperty(value[0], value[1]);
			return matches(value);
		case "string":
		case "symbol":
		case "number": return property(value);
	}
}

//#region src/math/range.ts
/**
* Returns an array of numbers from `start` (inclusive) to `end` (exclusive), incrementing by `step`.
*
* @param {number} start - The starting number of the range (inclusive).
* @param {number} end - The end number of the range (exclusive).
* @param {number} step - The step value for the range.
* @returns {number[]} An array of numbers from `start` (inclusive) to `end` (exclusive) with the specified `step`.
* @throws {Error} Throws an error if the step value is not a non-zero integer.
*
* @example
* // Returns [0, 1, 2, 3]
* range(4);
*
* @example
* // Returns [0, -1, -2, -3]
* range(0, -4, -1);
*/
function range(start, end, step = 1) {
	if (end == null) {
		end = start;
		start = 0;
	}
	if (!Number.isInteger(step) || step === 0) throw new Error(`The step value must be a non-zero integer.`);
	const length = Math.max(Math.ceil((end - start) / step), 0);
	const result = new Array(length);
	for (let i = 0; i < length; i++) result[i] = start + i * step;
	return result;
}

//#region src/compat/array/forEach.ts
/**
* Iterates over each element of the object invoking the provided callback function for each property.
*
* @template T - The type of object.
* @param {T} object - The object to iterate over.
* @param {(value: T[keyof T], key: keyof T, object: T) => unknown} [callback] - The function invoked for each property.
* The callback function receives three arguments:
*  - 'value': The current property being processed in the object.
*  - 'key': The key of the current property being processed in the object.
*  - 'object': The object 'forEach' was called upon.
* @returns {T} Returns the original object.
*
* @example
* forEach({'a': 1, 'b': 2 }, (value, key, object) => console.log(value, key));
* // Output:
* // 1 'a'
* // 2 'b'
*/
function forEach(collection, callback = identity) {
	if (!collection) return collection;
	const keys = isArrayLike(collection) || Array.isArray(collection) ? range(0, collection.length) : Object.keys(collection);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const value = collection[key];
		if (callback(value, key, collection) === false) break;
	}
	return collection;
}

//#region src/compat/_internal/isIterateeCall.ts
function isIterateeCall(value, index, object) {
	if (!isObject(object)) return false;
	if (typeof index === "number" && isArrayLike(object) && isIndex(index) && index < object.length || typeof index === "string" && index in object) return isEqualsSameValueZero(object[index], value);
	return false;
}

//#region src/compat/array/filter.ts
/**
* Iterates over the collection and filters elements based on the given predicate.
* If a function is provided, it is invoked for each element in the collection.
*
* @template T
* @param {ArrayLike<T> | Record<any, any> | null | undefined} source - The array or object to iterate over.
* @param {((item: T, index: number, arr: any) => unknown) | Partial<T> | [keyof T, unknown] | PropertyKey} [predicate=identity] - The function invoked per iteration.
* @returns {T[]} - Returns a new array of filtered elements that satisfy the predicate.
*
* @example
* filter([{ a: 1 }, { a: 2 }, { b: 1 }], 'a');
* // => [{ a: 1 }, { a: 2 }]
*
* filter([{ a: 1 }, { a: 2 }, { b: 1 }], { b: 1 });
* // => [{ b: 1 }]
*
* filter({ item1: { a: 0, b: true }, item2: { a: 1, b: true }, item3: { a: 2, b: false }}, { b: false })
* // => [{ a: 2, b: false }]
*
* filter([{ a: 1 }, { a: 2 }, { a: 3 }], ['a', 2]);
* // => [{ a: 2 }]
*/
function filter(source, predicate = identity) {
	if (!source) return [];
	predicate = iteratee(predicate);
	if (!Array.isArray(source)) {
		const result = [];
		const keys = Object.keys(source);
		const length = isArrayLike(source) ? source.length : keys.length;
		for (let i = 0; i < length; i++) {
			const key = keys[i];
			const value = source[key];
			if (predicate(value, key, source)) result.push(value);
		}
		return result;
	}
	const result = [];
	const length = source.length;
	for (let i = 0; i < length; i++) {
		const value = source[i];
		if (predicate(value, i, source)) result.push(value);
	}
	return result;
}

//#region src/compat/_internal/compareValues.ts
function getPriority(a) {
	if (typeof a === "symbol") return 1;
	if (a === null) return 2;
	if (a === void 0) return 3;
	if (a !== a) return 4;
	return 0;
}
const compareValues = (a, b, order) => {
	if (a !== b) {
		const aPriority = getPriority(a);
		const bPriority = getPriority(b);
		if (aPriority === bPriority && aPriority === 0) {
			if (a < b) return order === "desc" ? 1 : -1;
			if (a > b) return order === "desc" ? -1 : 1;
		}
		return order === "desc" ? bPriority - aPriority : aPriority - bPriority;
	}
	return 0;
};

//#region src/compat/_internal/isKey.ts
/**  Matches any deep property path. (e.g. `a.b[0].c`)*/
const regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
/**  Matches any word character (alphanumeric & underscore).*/
const regexIsPlainProp = /^\w*$/;
/**
* Checks if `value` is a property name and not a property path. (It's ok that the `value` is not in the keys of the `object`)
* @param {unknown} value The value to check.
* @param {unknown} object The object to query.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*
* @example
* isKey('a', { a: 1 });
* // => true
*
* isKey('a.b', { a: { b: 2 } });
* // => false
*/
function isKey(value, object) {
	if (Array.isArray(value)) return false;
	if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol(value)) return true;
	return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null;
}

//#region src/compat/array/orderBy.ts
/**
* Sorts an array of objects based on multiple properties and their corresponding order directions.
*
* This function takes an array of objects, an array of criteria to sort by, and an array of order directions.
* It returns the sorted array, ordering by each key according to its corresponding direction ('asc' for ascending or 'desc' for descending).
* If values for a key are equal, it moves to the next key to determine the order.
*
* @template T - The type of elements in the array.
* @param {ArrayLike<T> | object | null | undefined} collection - The array of objects to be sorted.
* @param {Criterion<T> | Array<Criterion<T>>} criteria - An array of criteria (property names or property paths or custom key functions) to sort by.
* @param {unknown | unknown[]} orders - An array of order directions ('asc' for ascending or 'desc' for descending).
* @param {unknown} [guard] Enables use as an iteratee for methods like `_.reduce`.
* @returns {T[]} - The sorted array.
*
* @example
* // Sort an array of objects by 'user' in ascending order and 'age' in descending order.
* const users = [
*   { user: 'fred', age: 48 },
*   { user: 'barney', age: 34 },
*   { user: 'fred', age: 40 },
*   { user: 'barney', age: 36 },
* ];
* const result = orderBy(users, ['user', (item) => item.age], ['asc', 'desc']);
* // result will be:
* // [
* //   { user: 'barney', age: 36 },
* //   { user: 'barney', age: 34 },
* //   { user: 'fred', age: 48 },
* //   { user: 'fred', age: 40 },
* // ]
*/
function orderBy(collection, criteria, orders, guard) {
	if (collection == null) return [];
	orders = orders;
	if (!Array.isArray(collection)) collection = Object.values(collection);
	if (!Array.isArray(criteria)) criteria = criteria == null ? [null] : [criteria];
	if (criteria.length === 0) criteria = [null];
	if (!Array.isArray(orders)) orders = orders == null ? [] : [orders];
	orders = orders.map((order) => String(order));
	const getValueByNestedPath = (object, path) => {
		let target = object;
		for (let i = 0; i < path.length && target != null; ++i) target = target[path[i]];
		return target;
	};
	const getValueByCriterion = (criterion, object) => {
		if (object == null || criterion == null) return object;
		if (typeof criterion === "object" && "key" in criterion) {
			if (Object.hasOwn(object, criterion.key)) return object[criterion.key];
			return getValueByNestedPath(object, criterion.path);
		}
		if (typeof criterion === "function") return criterion(object);
		if (Array.isArray(criterion)) return getValueByNestedPath(object, criterion);
		if (typeof object === "object") return object[criterion];
		return object;
	};
	const preparedCriteria = criteria.map((criterion) => {
		if (Array.isArray(criterion) && criterion.length === 1) criterion = criterion[0];
		if (criterion == null || typeof criterion === "function" || Array.isArray(criterion) || isKey(criterion)) return criterion;
		return {
			key: criterion,
			path: toPath(criterion)
		};
	});
	return collection.map((item) => ({
		original: item,
		criteria: preparedCriteria.map((criterion) => getValueByCriterion(criterion, item))
	})).slice().sort((a, b) => {
		for (let i = 0; i < preparedCriteria.length; i++) {
			const comparedResult = compareValues(a.criteria[i], b.criteria[i], orders[i]);
			if (comparedResult !== 0) return comparedResult;
		}
		return 0;
	}).map((item) => item.original);
}

//#region src/compat/array/reverse.ts
/**
* Reverses the elements of an array in place.
*
* This function takes an array and reverses its elements in place, modifying the original array.
* If the input is `null` or `undefined`, it returns the input as is.
*
* @template T - The type of elements in the array.
* @param {T[] | null | undefined} array - The array to reverse. If `null` or `undefined`, the input is returned as is.
* @returns {T[] | null | undefined} The reversed array, or `null`/`undefined` if the input was `null`/`undefined`.
*
* @example
* const array = [1, 2, 3, 4, 5];
* const reversedArray = reverse(array);
* // reversedArray is [5, 4, 3, 2, 1], and array is also modified to [5, 4, 3, 2, 1].
*
* const emptyArray = reverse([]);
* // emptyArray is [].
*
* const nullArray = reverse(null);
* // nullArray is null.
*/
function reverse(array) {
	if (array == null) return array;
	return array.reverse();
}

//#region src/compat/array/sortBy.ts
function sortBy(collection, ...criteria) {
	const length = criteria.length;
	if (length > 1 && isIterateeCall(collection, criteria[0], criteria[1])) criteria = [];
	else if (length > 2 && isIterateeCall(criteria[0], criteria[1], criteria[2])) criteria = [criteria[0]];
	return orderBy(collection, flatten(criteria), ["asc"]);
}

//#region src/function/flow.ts
/**
* Creates a new function that executes the given functions in sequence. The return value of the previous function is passed as an argument to the next function.
*
* The `this` context of the returned function is also passed to the functions provided as parameters.
*
* @param {Array<(...args: any[]) => any>} funcs The functions to invoke.
* @returns {(...args: any[]) => any} Returns the new composite function.
*
* @example
* const add = (x: number, y: number) => x + y;
* const square = (n: number) => n * n;
*
* const combined = flow(add, square);
* console.log(combined(1, 2)); // 9
*/
function flow$1(...funcs) {
	return function(...args) {
		let result = funcs.length ? funcs[0].apply(this, args) : args[0];
		for (let i = 1; i < funcs.length; i++) result = funcs[i].call(this, result);
		return result;
	};
}

//#region src/compat/function/flow.ts
/**
* Creates a new function that executes the given functions in sequence. The return value of the previous function is passed as an argument to the next function.
*
* The `this` context of the returned function is also passed to the functions provided as parameters.
*
* @param {Array<((...args: any[]) => any) | Array<(...args: any[]) => any>>} funcs The functions to invoke.
* @returns {(...args: any[]) => any} Returns the new composite function.
*
* @example
* const add = (x: number, y: number) => x + y;
* const square = (n: number) => n * n;
* const double = (n: number) => n * 2;
*
* const combined = flow([add, square], double);
* console.log(combined(1, 2)); // 18
*/
function flow(...funcs) {
	const flattenFuncs = flatten(funcs, 1);
	if (flattenFuncs.some((func) => typeof func !== "function")) throw new TypeError("Expected a function");
	return flow$1(...flattenFuncs);
}

//#region src/compat/predicate/isTypedArray.ts
/**
* Checks if a value is a TypedArray.
* @param {any} x The value to check.
* @returns {boolean} Returns true if `x` is a TypedArray, false otherwise.
*
* @example
* const arr = new Uint8Array([1, 2, 3]);
* isTypedArray(arr); // true
*
* const regularArray = [1, 2, 3];
* isTypedArray(regularArray); // false
*
* const buffer = new ArrayBuffer(16);
* isTypedArray(buffer); // false
*/
function isTypedArray(x) {
	return isTypedArray$1(x);
}

//#region src/compat/util/times.ts
/**
* Invokes the getValue function n times, returning an array of the results.
*
* @template R The return type of the getValue function.
* @param {number} n - The number of times to invoke getValue.
* @param {(index: number) => R} getValue - The function to invoke for each index.
* @returns {R[]} An array containing the results of invoking getValue n times.
* @example
* times(3, (i) => i * 2); // => [0, 2, 4]
* times(2, () => 'es-toolkit'); // => ['es-toolkit', 'es-toolkit']
*/
function times(n, getValue) {
	n = toInteger(n);
	if (n < 1 || !Number.isSafeInteger(n)) return [];
	const result = new Array(n);
	for (let i = 0; i < n; i++) result[i] = typeof getValue === "function" ? getValue(i) : i;
	return result;
}

//#region src/compat/_internal/isPrototype.ts
function isPrototype(value) {
	const constructor = value?.constructor;
	return value === (typeof constructor === "function" ? constructor.prototype : Object.prototype);
}

//#region src/compat/object/keys.ts
/**
* Creates an array of the own enumerable property names of `object`.
*
* Non-object values are coerced to objects.
*
* @param {object} object The object to query.
* @returns {string[]} Returns the array of property names.
* @example
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
* Foo.prototype.c = 3;
* keys(new Foo); // ['a', 'b'] (iteration order is not guaranteed)
*
* keys('hi'); // ['0', '1']
* keys([1, 2, 3]); // ['0', '1', '2']
* keys({ a: 1, b: 2 }); // ['a', 'b']
*/
function keys(object) {
	if (isArrayLike(object)) return arrayLikeKeys(object);
	const result = Object.keys(Object(object));
	if (!isPrototype(object)) return result;
	return result.filter((key) => key !== "constructor");
}
function arrayLikeKeys(object) {
	const indices = times(object.length, (index) => `${index}`);
	const filteredKeys = new Set(indices);
	if (isBuffer(object)) {
		filteredKeys.add("offset");
		filteredKeys.add("parent");
	}
	if (isTypedArray(object)) {
		filteredKeys.add("buffer");
		filteredKeys.add("byteLength");
		filteredKeys.add("byteOffset");
	}
	const inheritedKeys = Object.keys(object).filter((key) => !filteredKeys.has(key));
	if (Array.isArray(object)) return [...indices, ...inheritedKeys];
	return [...indices.filter((index) => Object.hasOwn(object, index)), ...inheritedKeys];
}

//#region src/compat/_internal/mapToEntries.ts
function mapToEntries(map) {
	const arr = new Array(map.size);
	const keys = map.keys();
	const values = map.values();
	for (let i = 0; i < arr.length; i++) arr[i] = [keys.next().value, values.next().value];
	return arr;
}

//#region src/compat/_internal/setToEntries.ts
function setToEntries(set) {
	const arr = new Array(set.size);
	const values = set.values();
	for (let i = 0; i < arr.length; i++) {
		const value = values.next().value;
		arr[i] = [value, value];
	}
	return arr;
}

//#region src/compat/object/toPairs.ts
/**
* Creates an array of key-value pairs from an object, set, or map.
*
* @template T
* @param {Record<string, T> | Record<number, T> | object} object - The object, set, or map to query.
* @returns {Array<[string, T]> | Array<[string, any]>} Returns the array of key-value pairs.
*
* @example
* const object = { a: 1, b: 2 };
* toPairs(object); // [['a', 1], ['b', 2]]
*
* const set = new Set([1, 2]);
* toPairs(set); // [[1, 1], [2, 2]]
*
* const map = new Map();
* map.set('a', 1);
* map.set('b', 2);
* toPairs(map); // [['a', 1], ['b', 2]]
*/
function toPairs(object) {
	if (object == null) return [];
	if (object instanceof Set) return setToEntries(object);
	if (object instanceof Map) return mapToEntries(object);
	const keys$1 = keys(object);
	const result = new Array(keys$1.length);
	for (let i = 0; i < keys$1.length; i++) {
		const key = keys$1[i];
		result[i] = [key, object[key]];
	}
	return result;
}

let input = document.querySelector("#book-filter");
input?.removeAttribute("hidden");
let searchTermsToElement = [];
document.querySelectorAll(".book-entry-item").forEach((element) => {
  let bookEntry = element;
  let terms = clean_terms(bookEntry.textContent);
  searchTermsToElement.push([terms, bookEntry]);
});
function filterBooks(input2) {
  let yearToCount = {};
  if (input2.length === 0) {
    searchTermsToElement.forEach(([_, element]) => {
      element.removeAttribute("hidden");
    });
    document.querySelectorAll(".book-divider").forEach((element) => {
      element.removeAttribute("hidden");
    });
    return;
  }
  searchTermsToElement.forEach(([terms, element]) => {
    let category = element.id.split("-")[2];
    let year = element.id.split("-")[3];
    if (!(year in yearToCount)) {
      yearToCount[year] = 0;
    }
    if (input2.every((i) => terms.some((term) => term.includes(i)))) {
      element.removeAttribute("hidden");
      if (category === "past") {
        yearToCount[year] += 1;
      }
    } else {
      element.setAttribute("hidden", "");
    }
  });
  flow([
    toPairs,
    (v) => filter(v, ([year, count]) => year != ""),
    (v) => sortBy(v, (pair) => pair[0]),
    reverse,
    (v) => forEach(v, ([year, count]) => {
      let divider = document.querySelector(
        `#book-divider-${year}`
      );
      if (divider) {
        if (count > 0) {
          divider.removeAttribute("hidden");
        } else {
          divider.setAttribute("hidden", "");
        }
      }
    })
  ])(yearToCount);
}
let readingInput = document.querySelector(
  "#reading-input"
);
readingInput.addEventListener("input", (event) => {
  let input2 = event.target.value;
  let input_clean = clean_terms(input2);
  filterBooks(input_clean);
});
let readingClear = document.querySelector(
  "#reading-clear"
);
readingClear.addEventListener("click", () => {
  readingInput.value = "";
  filterBooks([]);
});
