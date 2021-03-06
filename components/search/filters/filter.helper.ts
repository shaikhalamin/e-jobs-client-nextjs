export type CheckBoxType =
  | "cities"
  | "job-industries"
  | "job-type"
  | "career-level";

export interface CheckBoxPayloadProps {
  type: CheckBoxType;
  items: string[];
}
export interface CheckBoxItemsProps {
  id: number;
  title: string;
  alias: string;
  checked?: boolean;
}

export interface CheckBoxFilterProps {
  checkBoxType: CheckBoxType;
  items: CheckBoxItemsProps[];
  onChange: (value: CheckBoxPayloadProps) => void;
  showItemFilterInput?: boolean;
  activeKey:string;
  cssClass?:string
}

export const capitalizeFirstLetter = (letter: string) => {
  return letter.length > 0
    ? letter.charAt(0).toUpperCase() + letter.slice(1)
    : "";
};

