import { createAction, Property } from '@activepieces/pieces-framework';

export const createExpense = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'createExpense',
  displayName: 'Create Expense',
  description: 'Creates a new expense.',
  props: {},
  async run() {
    // Action logic here
  },
});
