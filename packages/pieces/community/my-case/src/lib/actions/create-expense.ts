import { createAction } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const createExpense = createAction({
  auth: myCaseAuth,
  name: 'createExpense',
  displayName: 'Create Expense',
  description: 'Creates a new expense.',
  props: {},
  async run() {
    // Action logic here
  },
});
