import {InputBaseState} from "./input-base-state.type";
import {SelectControlOption} from "./select-control-option.type";

export interface SelectControlState extends InputBaseState {
options: SelectControlOption[];
}
