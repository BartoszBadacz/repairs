export interface InputBaseState {
  name: string,
  autocomplete: 'off' | '',
  isDisabled: boolean;
  label: string;
  required?: boolean,
  placeholder?: string,
  errorMessage?: string,
}
