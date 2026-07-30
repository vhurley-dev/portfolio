export interface LabSection {
  title: string;
  componentName: string;
  challenge: string;
  solution: string;
  developerNotes?: DeveloperNote[];
  articles?: LabArticle[];
}

export interface DeveloperNote {
  title: string;
  note: string;
}

export interface LabArticle {
  title: string;
  url: string;
}

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
