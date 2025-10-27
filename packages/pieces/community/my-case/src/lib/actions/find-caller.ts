import { createAction, Property } from '@activepieces/pieces-framework';

export const findCaller = createAction({
  // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
  name: 'findCaller',
  displayName: 'Find Caller',
  description: '	Finds a caller.',
  props: {},
  async run() {
    // Action logic here
  },
});
