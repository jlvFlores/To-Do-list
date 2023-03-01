/**
 * @jest-environment jsdom
 */

import { renameListItem, clearSelected } from './add-remove-list.js';
import { updateCompletedV2 } from './update.js';

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
  });
  test('Clear completed', () => {
    const array = [
      { description: 'desc', completed: false, indexVal: 1 },
      { description: 'desc', completed: true, indexVal: 2 },
    ];
    const changed = [
      { description: 'desc', completed: false, indexVal: 1 },
    ];
    expect(clearSelected(array)).toStrictEqual(changed);
  });
});