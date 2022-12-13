import {Intents, NameStates, statesMap} from "../../Utils"
import {MachineState} from "../../MachineState"
import { Model } from "~~/server/Model"


/**
 * Concrete state class that will redefine prepare response and change state methods
 */
export class ActionSelectionState extends MachineState {
    /**
     * Using the received string prepares the appropriate json response by interacting with the dialogflow api
     */
    async prepareResponse(phrase: string): Promise<any> {
        // Parent class method returns the intent
        await super.prepareResponse(phrase)
        let intent: string = super.intentString
        if (intent == Intents.forest_management_buy) {
            if(Model.Instance.canIBuyATree()){
                super.setNextState(statesMap.get(NameStates.PositionSelectionState)!)
            } else{
                super.setAnswer("Ops, you have not enough Leaves to buy a plant! Would you like to know how to get some?")
                super.setNextState(statesMap.get(NameStates.TipRequestNoLeavesState)!)
            }
        } else if (intent == Intents.forest_management_group) {
            //TODO this diramation within state machine need to be clarified
        } else {
            console.log("From ActionSelectionState could not detect intent:" + intent)
        }
        return super.finalResponse
    }
}
