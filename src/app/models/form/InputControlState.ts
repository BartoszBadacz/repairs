import {InputControlType} from "./formConfig";

export interface InputControlState {
  name: string,
  type: InputControlType,
  errorMessage: string,
  autocomplete: 'off' | '',
  isDisabled: boolean;
  label: string;
  placeholder?: string,
}

