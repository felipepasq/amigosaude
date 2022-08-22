import { useForm } from "react-hook-form";
type SelectProps = {
  selectName: string;
  selectId: string;
  options: Options[];
  optionLabel: string;
  optionValue: string | number;
};
type Options = {
  label: string;
  value: string | number;
};
export default function Select({
  selectName,
  selectId,
  options,
  optionLabel,
  optionValue,
}: SelectProps) {
  return (
    <select id={selectId} title={selectName}>
      {options?.map((option) => {
        return (
          <option
            key={option[optionValue as keyof typeof option]}
            value={option[optionValue as keyof typeof option]}
          >
            {option[optionLabel as keyof typeof option]}
          </option>
        );
      })}
    </select>
  );
}
