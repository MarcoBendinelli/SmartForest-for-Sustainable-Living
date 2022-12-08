import {Intents} from "../intents";
import {MachineState} from "../MachineState";
import {ActionSelectionState} from "./left_wing/ActionselectionState";
import {StateRequestState} from "./middle_wing/StateRequestState";
import {AdviceSelectionState} from "./right_wing/AdviceSelectionState";

/**
 * Concrete state class that will redefine prepare response and change state methods
 */
export class UserRequestState extends MachineState {
    /**
     * Using the received string prepares the appropriate json response by interacting with the dialogflow api
     */
    async prepareResponse(phrase: string): Promise<string> {
        //Parent class method returns the intent
        let promisedIntent: Promise<string> = super.prepareResponse(phrase)
        let intent: string = await promisedIntent
        if (intent == Intents.forest_management_general) {
            super.setNextState(new ActionSelectionState())
        } else if (intent == Intents.forest_status_general) {
            super.setNextState(new StateRequestState())
        } else if (intent == Intents.advices_general) {
            super.setNextState(new AdviceSelectionState())
        } else if (intent == Intents.guide_general) {
            //guide part of the tree
        } else {
            console.log("From UserRequestState: could not detect intent:" + intent)
        }
        return promisedIntent
    }
}
