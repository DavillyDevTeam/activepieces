import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { createDataSource } from './lib/actions/create-data-source';
import { ibmCognosAnalyticsAuth } from './lib/common';
import { updateDataSource } from './lib/actions/update-data-source';
import { deleteDataSource } from './lib/actions/delete-data-source';
import { getDataSource } from './lib/actions/get-data-source';
import { moveContentObject } from './lib/actions/move-content-object';
import { copyContentObject } from './lib/actions/copy-content-object';
import { getContentObject } from './lib/actions/get-content-object';

export const ibmCognosAnalytics = createPiece({
  displayName: 'Ibm-cognos-analytics',
  auth: ibmCognosAnalyticsAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/ibm-cognos-analytics.png',
  authors: ['anamainart'],
  actions: [createDataSource, updateDataSource, deleteDataSource, getDataSource, updateDataSource, moveContentObject, copyContentObject, getContentObject],
  triggers: [],
});
