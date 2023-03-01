/**
 * @jest-environment jsdom
 */

import { renameListItem } from './add-remove-list.js';
import { updateCompletedV2 } from './update.js';

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

describe('Testing Crud functions', () => {
  test('edit description test', () => {
    const array = [{ description: 'desc', completed: false, indexVal: 1 }];
    const changed = [{ description: 'new text', completed: false, indexVal: 1 }];
    expect(renameListItem(1, 'new text', array)).toStrictEqual(changed);
  });
  test('Update task status', () => {
    const array = [{ description: 'desc', completed: false, indexVal: 1 }];
    const changed = [{ description: 'desc', completed: true, indexVal: 1 }];
    expect(updateCompletedV2(0, array)).toStrictEqual(changed);
  })

});