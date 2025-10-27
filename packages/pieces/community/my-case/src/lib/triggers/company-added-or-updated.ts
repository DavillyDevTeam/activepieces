
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const companyAddedOrUpdated = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'companyAddedOrUpdated',
    displayName: 'Company Added or Updated',
    description: 'Fires when a company has been added or updated.',
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