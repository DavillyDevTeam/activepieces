
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { myCaseAuth } from '../common';

export const caseAddedOrUpdated = createTrigger({
    auth: myCaseAuth,
    name: 'caseAddedOrUpdated',
    displayName: 'Case Added or Updated',
    description: 'Fires when a case has been added or updated.',
    props: {},
    sampleData: {},
    type: TriggerStrategy.WEBHOOK,
    async onEnable(context){
        // implement webhook creation logic
    },
    async onDisable(context){
        // implement webhook deletion logic
    },
    async run(context){
        return [context.payload.body]
    }
})
