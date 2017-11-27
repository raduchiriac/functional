/**
 * 01. Compose
 * takes two functions, f and g and returns you a new function that takes an X and passes that value to g then to f
 *
 * x -> g -> f -> result
 * (f o g)(x)
 */

export const compose = (g, f) => (...x) => g(f(...x));

/**
 *  02. Pipe
 *  takes 1 to inifinity functions and returns a new function that will apply x to all those functions
 *
 *  pipe(f, g, z, ...fs) => x -> f -> g -> z -> ...fs -> result
 */

export const pipe = (...fs) => x => fs.reduce((a, c) => c(a), x);

/**
 *  03. Curry
 *  Curry takes a function and a number of arguments, and returns you a new function
 *  this new function will be the function you passed with already a number of arguments pre-configured
 */

export const curry = () => {};

/**
 * 04. LazyBox
 *
 * The lazy box allows you to execute a function and a bunch of operation only when needed
 * it allows you to build complex pipes and only compute their values when needed
 *
 * @input: a function g
 * @output: Object with those methods:
 *  - map: returns a new lazyBox with a new function which is the composition of f and g WITHOUT evaluating the result of g
 *  - fold: evaluates the composition of the function passed to the lazyBox as well as the function passed to fold
 */
export const lazyBox = () => ({});

/**
 * 05. Either or operator (left or right)
 *
 * Either (or) operator is composed of two operators:
 * Left || Right
 *
 * It allows you to do code branching or to enforce error handling for example
 *
 */

/**
 * @param value can be any value you want
 * @output Object with those methods:
 *   - map :: f => left
 *   - fold :: f, g => f(x)
 */
export const left = () => ({});

/**
 * @param value can be any value you want
 * @output Object with those methods:
 *   - map :: f => f(x)
 *   - fold :: f, g => g(x)
 */
export const right = () => ({});

/**
 * Either takes a value, if that value is falsey it returns a left of that value otherwise it returns a right of that value
 */
export const either = () => ({});

/**
 * 6. Maybe
 * The maybe operator allows you to go though an object or to execute actions
 * without worrying about null or undefined values
 *
 * @param value
 * @output Object with those methods
 *  - fold :: () => x (returns the value of the current maybe)
 *  - map :: f => Maybe || Nothing (returns the result of f on x in a new Maybe, if x is null f should not be executed)
 *  - chain :: f => f (returns the result of f on x)
 */
const isNothing = () => ({});

export const maybe = () => ({});

export const nothing = () => ({});

/**
 * 07. Lenses
 * Lenses are functional getters and setters
 *
 * Example usage:
 * const nameProp = lensProp('name');
 *
 * nameProp.get({name: 'Antonio'}); // 'Antonio'
 * nameProp.set('lala', {name: 'Antonio', id: 42}); // {name: 'lala', id: 42}
 * nameProp.over(x => x.toUpperCase(), {name: 'Antonio', id: 42}); // {name: 'LALA', id: 42}
 */

/**
 * Prop takes a key and returns a new function
 * this function takes an object and return the value for the key you first passed in that object
 *
 * Example:
 * const name = prop('name');
 * name({name: 'Antonio'}) // 'Antonio'
 */
export const prop = key => obj => obj[key];

/**
 * Path takes a path and return a function
 * that function takes an object and access the value at the path provided
 *
 * Example:
 * const companyId = path(['user', 'company', 'id']);
 * companyId({user: {company: {id: 42}}}); // 42
 **/
export const path = keys => obj => keys.reduce((acc, next) => acc[next], obj);

/**
 * Assoc takes a key and returns a function
 * that function takes a value and an object and apply that value on the objct at the key we first passed
 * and returns a new object without modifying the original array
 *
 * Example:
 * const assocName = assoc('name');
 *
 */
export const assoc = key => (val, obj) => ({ ...obj, [key]: val });

/**
 *
 * Apply works just like assoc but instead of passing a value you give a function to apply on the key we gave you
 */
export const apply = key => (f, obj) => assoc(key)(f(prop(key)(obj)), obj);

/**
 *
 * view takes a lens and an object and call the get method of that lens on the object
 */
export const view = (lens, object) => lens.get(object);

/**
 * set takes a lens, a value, and an object and call the set method of the lens with the value and the object we gave it
 */
export const set = (lens, value, object) => lens.set(value, object);

/**
 * over works just like set except that it takes a function to apply on the key instead of a value
 */
export const over = (lens, f, object) => lens.over(f, object);

export const lens = () => ({});

export const lensProp = () => ({});

export const assocPath = keys => (value, obj) => {
  const firstKey = keys[0];
  const nextObject = lensProp(firstKey);
  return keys.length === 1
    ? {
        ...obj,
        [firstKey]: value
      }
    : {
        ...obj,
        [firstKey]: assocPath(keys.slice(1, keys.length))(
          value,
          view(nextObject, obj)
        )
      };
};

export const lensIndex = () => ({});

export const lensPath = () => ({});

/**
 * 08. Range
 *
 * Range is a function that returns you an array of numbers based on parameters you passed
 *
 * You can use it to remove for loops
 *
 * @param n min
 * @param m max
 *
 * if m is not defined, 0 becomes the minimum and n the maximum
 *
 * Minimum is included, maximum should be excluded
 *
 * @output [numbers]
 */

export const range = () => [];
