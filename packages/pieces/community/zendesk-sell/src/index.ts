import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { createContact } from './lib/actions/create-contact';
import { createDeal } from './lib/actions/create-deal';
import { createLead } from './lib/actions/create-lead';
import { createNote } from './lib/actions/create-note';
import { createTask } from './lib/actions/create-task';
import { updateContact } from './lib/actions/update-contact';
import { updateDeal } from './lib/actions/update-deal';
import { findDeal } from './lib/actions/find-deal';
import { findContact } from './lib/actions/find-contact';
import { findLead } from './lib/actions/find-lead';
import { findCompany } from './lib/actions/find-company';
import { findUser } from './lib/actions/find-user';

export const zendeskSell = createPiece({
  displayName: 'Zendesk Sell',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.36.1',
  logoUrl: 'https://cdn.activepieces.com/pieces/zendesk-sell.png',
  authors: ['anamainart', 'LuizDMM'],
  actions: [
    createContact,
    createLead,
    createDeal,
    updateContact,
    updateDeal,
    createNote,
    createTask,
    findDeal,
    findContact,
    findLead,
    findCompany,
    findUser
  ],
  triggers: [],
});
