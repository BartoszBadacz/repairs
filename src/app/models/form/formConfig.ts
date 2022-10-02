import {InputControlState} from "./InputControlState";

export interface FormConfig {
  sections: SectionByName;
}
export type ControlByName = Record<string, InputControlState>
export type SectionByName = Record<string, ControlByName>

export type InputControlType = 'text'
  | 'number'
  | 'password'
  | 'date'
  | 'hidden'

export type ControlType =
  | 'select'
  | 'switch'
  | 'multiple';
