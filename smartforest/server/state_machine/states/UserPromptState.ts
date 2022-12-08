import {Intents} from "../intents";
import {MachineState} from "../MachineState";
import {UserRequestState} from "./UserRequestState";

/**
 * Concrete state class that will redefine prepare response and change state methods
 */
export class UserPromptState extends MachineState {
    /**
     * Using the received string prepares the appropriate json response by interacting with the dialogflow api
     */
    async prepareResponse(phrase: string): Promise<string> {
        // Parent class method returns the intent
        let promisedIntent: Promise<string> = super.prepareResponse(phrase)
        let intent: string = await promisedIntent

        switch (intent) {
            case Intents.Welcome_Flora: {
                super.setNextState(new UserRequestState())
                break;
            }
            case Intents.forest_management_general: {
                console.log(Intents.forest_management_general)
                break;
            }
            case Intents.forest_management_buy: {
                console.log(Intents.forest_management_buy)
                break;
            }
            case Intents.forest_management_group: {
                console.log(Intents.forest_management_group)
                break;
            }
            case Intents.forest_status_general: {
                console.log(Intents.forest_status_general)
                break;
            }
            case Intents.forest_status_overall: {
                console.log(Intents.forest_status_overall)
                break;
            }
            case Intents.forest_status_overall_leaves: {
                console.log(Intents.forest_status_overall_leaves)
                break;
            }
            case Intents.forest_status_overall_levelExperience: {
                console.log(Intents.forest_status_overall_levelExperience)
                break;
            }
            case Intents.forest_status_overall_notifications: {
                console.log(Intents.forest_status_overall_notifications)
                break;
            }
            case Intents.forest_status_overall_numberTrees: {
                console.log(Intents.forest_status_overall_numberTrees)
                break;
            }
            case Intents.forest_status_specific: {
                console.log(Intents.forest_status_specific)
                break;
            }
            case Intents.guide_general: {
                console.log(Intents.guide_general)
                break;
            }
            case Intents.guide_group_plant: {
                console.log(Intents.guide_group_plant)
                break;
            }
            case Intents.guide_strategy: {
                console.log(Intents.guide_strategy)
                break;
            }
            case Intents.guide_tree_types: {
                console.log(Intents.guide_tree_types)
                break;
            }
            case Intents.guide_plant: {
                console.log(Intents.guide_plant)
                break;
            }
            default: {
                console.log("From UserPromptState could not detect intent:" + intent)
                break;
            }
        }

        return promisedIntent
    }

}
