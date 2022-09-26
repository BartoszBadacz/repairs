import {InputControlState} from "./InputControlState";

export interface FormState {
  title?: string,
  isNullable?: boolean;
  controls?: ControlByName;
}
type ControlByName = Record<string, InputControlState>

export type InputControlType = 'text'
  | 'number'
  | 'password'
  | 'date'
  | 'hidden'

export type ControlType =
  | 'select'
  | 'switch'
  | 'multiple';
