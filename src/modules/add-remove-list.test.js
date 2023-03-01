/**
 * @jest-environment jsdom
 */

import { pushListItem, filterListItem } from './add-remove-list.js';

describe('Add and remove funtions', () => {
  test('Add to localStorage', () => {
    const desc = 'Do chores';

    expect(pushListItem(desc)).toEqual([{ description: desc, completed: false, indexVal: 1 }]);
  });
  test('Remove from localStorage', () => {
    const id = 1;
    const array = [{ description: 'desc', completed: false, indexVal: 1 }];

    expect(filterListItem(id, array)).toEqual([]);
  });
});