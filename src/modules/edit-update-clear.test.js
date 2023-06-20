/**
 * @jest-environment jsdom
 */

import { pushListItem, renameListItem, clearSelected } from './add-remove-list.js';

describe('Testing Crud functions', () => {
  const chore = 'laundry';
  const newChore = 'Mop';
  const expectedResult = [{ description: newChore, completed: false, indexVal: 1 }];
  pushListItem(chore);

  test('edit description test', () => {
    expect(renameListItem(1, newChore)).toStrictEqual(expectedResult);
  });
  test('Clear completed', () => {
    expect(clearSelected()).toStrictEqual(expectedResult);
  });
});