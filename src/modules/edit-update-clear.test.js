/**
 * @jest-environment jsdom
 */

import { renameListItem } from './add-remove-list.js';

class localStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new localStorageMock;

localStorage.setItem('list', {description: 'hello', completed: false, indexVal: 1 })
const list = JSON.parse(localStorage.getItem('list'));
console.log(list)

describe('Testing Crud functions', () => {
  test('edit description test', () => {

    expect(list).toBe({description: 'hello', completed: false, indexVal: 1 });
  });

});