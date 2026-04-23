export interface LabTab {
  id: string;
  title: string;
  description: string;
}

export interface ComboboxOption {
  id: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}
