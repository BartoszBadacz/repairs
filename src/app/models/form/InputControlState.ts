import {InputControlType} from "./formConfig";

export interface InputControlState {
  name: string,
  type: InputControlType,
  errorMessage: string,
  autocomplete: 'off' | '',
  disabled: boolean;
  label: string;
}

