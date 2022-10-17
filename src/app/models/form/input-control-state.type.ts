import {ControlInputType} from "./control-input.type";

export interface InputControlStateType {
  name: string,
  type: ControlInputType,
  autocomplete: 'off' | '',
  isDisabled: boolean;
  label: string;
  required?: boolean,
  placeholder?: string,
  errorMessage?: string,
}

