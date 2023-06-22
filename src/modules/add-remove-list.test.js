/**
 * @jest-environment jsdom
 */

import { pushListItem, filterListItem } from './add-remove-list.js';

describe('Add and remove funtions', () => {
  const desc = 'Do chores';
  const desc2 = 'Brush teeth';

  test('Add to localStorage', () => {
    expect(pushListItem(desc)).toEqual([{ description: desc, completed: false, indexVal: 1 }]);
  });
  test('Remove from localStorage', () => {
    pushListItem(desc2);
    expect(filterListItem(1)).toEqual([{ description: desc2, completed: false, indexVal: 2 }]);
  });
});