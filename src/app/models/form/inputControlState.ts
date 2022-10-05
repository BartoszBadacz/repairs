import {ControlInputType} from "./controlInput";

export interface InputControlState {
  name: string,
  type: ControlInputType,
  errorMessage: string,
  autocomplete: 'off' | '',
  isDisabled: boolean;
  label: string;
  placeholder?: string,
}

