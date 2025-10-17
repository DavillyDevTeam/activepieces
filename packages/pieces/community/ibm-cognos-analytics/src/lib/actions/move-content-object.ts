import { ibmCognosAnalytics } from '@activepieces/piece-ibm-cognos-analytics';
import { createAction, Property } from '@activepieces/pieces-framework';
import { ibmCognosAnalyticsAuth } from '../common';

export const moveContentObject = createAction({
  auth: ibmCognosAnalyticsAuth,
  name: 'moveContentObject',
  displayName: 'Move Content Object',
  description: 'Moves content object.',
  props: {},
  async run() {
    // Action logic here
  },
});
