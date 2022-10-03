import {InputControlState} from "./InputControlState";

export interface FormConfig {
  formTitle: string,
  sections: SectionByName;
}

export type ControlByName = Record<string, InputControlState>

export interface FormSectionConfig {
  sectionTitle: string,
  controls: ControlByName,
}

export type SectionByName = Record<string, FormSectionConfig>

export type InputControlType = 'text'
  | 'number'
  | 'password'
  | 'date'
  | 'hidden'

export type ControlType =
  | 'select'
  | 'switch'
  | 'multiple';
