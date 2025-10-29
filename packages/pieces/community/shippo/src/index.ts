import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { shippoAuth } from './lib/common';
import { createOrder } from './lib/actions/create-order';
import { newShippingLabel } from './lib/triggers/new-shipping-label';
import { newOrder } from './lib/triggers/new-order';
import { findAnOrder } from './lib/actions/find-an-order';
import { findAShippingLabel } from './lib/actions/find-a-shipping-label';

export const shippo = createPiece({
  displayName: 'Shippo',
  auth: shippoAuth,
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/shippo.png',
  authors: ['anamainart', 'LuizDMM'],
  actions: [
    createOrder,
    findAnOrder,
    findAShippingLabel
  ],
  triggers: [
    newShippingLabel,
    newOrder
  ],
});
