import {Intents} from "../../intents"
import {MachineState} from "../../MachineState"


/**
 * Concrete state class that will redefine prepare response and change state methods
 */
export class TipRequestNoLeavesState extends MachineState {
    /**
     * Using the received string prepares the appropriate json response by interacting with the dialogflow api
     */
    async prepareResponse(phrase: string): Promise<Map<string, string>> {
        //Parent class method returns the intent
        let fromDialogFlow: Map<string, string> = await super.prepareResponse(phrase)
        let intent: string = fromDialogFlow.get('intent')!
        let answer: string = fromDialogFlow.get('answer')!

        if (intent == Intents.yes_answer) {
            //not a state waiting for interaction
        } else if (intent == Intents.no_answer) {
            //not a state waiting for interaction
        } else {
            console.log("TipRequestNoLeavesState could not detect intent:" + intent)
        }
        return fromDialogFlow

    }
}