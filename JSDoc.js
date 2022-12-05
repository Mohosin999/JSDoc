/**
 * General
 * @type {string}
 */
const stdName = "akash";

/**
 * Array
 * @type {Array<number>}
 */
const arr = [12, 2, 3, 4, 5];

/**
 * Object
 * @type {{id: number, name: string}}
 */
const obj = {
  id: 11,
  name: "Mohosin",
};

/**
 * Function
 * @param {number} num2
 * @param {number} num3
 * @returns {number} - It's return the sum of this number
 */
const sumFunc = (num2, num3) => {
  return num2 + num3;
};

/**
 * Custom Type
 * @typedef {Object} Student
 * @property {number} id - Student id
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */

const student = {
  id: 2,
  name: "nayem",
  age: 5,
  isActive: true,
};

/**
 * Class
 */
class Person {
  /**
   *
   * @param {Object} personInfo
   */
  constructor(personInfo) {
    /**
     * @property {string} name
     * @property {string|number} age
     */
    this.name = personInfo.name;
    this.age = personInfo.age;
  }

  /**
   * @property {Function} greet
   * @returns {void} because it's a just console.log()
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}
