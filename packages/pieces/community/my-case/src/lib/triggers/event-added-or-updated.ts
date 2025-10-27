
import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
export const eventAddedOrUpdated = createTrigger({
    // auth: check https://www.activepieces.com/docs/developers/piece-reference/authentication,
    name: 'eventAddedOrUpdated',
    displayName: 'Event Added or Updated',
    description: 'Fires when an event has been added or updated.',
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