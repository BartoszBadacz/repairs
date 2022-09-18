import {Validator} from "@angular/forms";

export interface DynamicFormState {
  title?: string,
  isNullable?: boolean;
  controls?: Control<any>[];
}

interface Control<T> {
  type: ControlType,
  state?: T;
}

type ControlType =
  'text'
  | 'number'
  | 'select'
  | 'switch'
  | 'password'
  | 'hidden'
  | 'multiple';

interface ControlOption {
  id: string,
  value: string,
}

interface FormControlBaseState {
  type?: ControlType,
  name?: string,
  value?: any;
  validations?: Validator[];
  label?: string,
  errorMessage?: string,
  disabled?: boolean,
}

export interface FormControlTextState extends FormControlBaseState {}

export interface FormControlNumberState extends FormControlBaseState {
  counter: number,
}

export interface FormControlSelectState extends FormControlBaseState {
  options?: ControlOption[];
}

export interface FormControlSwitchState extends FormControlBaseState {
  desc: string,
}

export interface FormControlPasswordState extends FormControlBaseState {
  desc: string,
}

export interface FormControlHiddenState extends FormControlBaseState {

}
