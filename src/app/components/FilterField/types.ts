export interface FilterFieldProps {
    label: string;
    value: string | null;
    onChange: (value: string) => void;
    type?: string;
  }