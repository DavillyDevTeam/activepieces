import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const updateDataSource = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'updateDataSource',
  displayName: 'Update Data Source',
  description: 'Updates an existing Data Source.',
  props: {},
  async run() {
    // Action logic here
  },
});
