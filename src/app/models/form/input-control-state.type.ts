import {ControlInputType} from "./control-input.type";

export interface InputControlStateType {
  name: string,
  type: ControlInputType,
  errorMessage: string,
  autocomplete: 'off' | '',
  isDisabled: boolean;
  label: string;
  required?: boolean,
  placeholder?: string,
}

