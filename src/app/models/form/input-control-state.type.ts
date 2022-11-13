import {ControlInputType} from "./control-input.type";
import {InputBaseState} from "./input-base-state.type";

export interface InputControlState extends InputBaseState{
  type: ControlInputType,
}

