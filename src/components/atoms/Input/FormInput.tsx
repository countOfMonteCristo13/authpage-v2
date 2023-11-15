import { FC } from 'react';
import { Input, Label, StyledInput } from './FormInputStyles';

type FormInputProps = {
  inputType?: string;
  label: string;
  placeholder?: string;
  register: any;
};

const FormInput: FC<FormInputProps> = ({
  inputType = 'text',
  label,
  register,
}) => {
  return (
    <StyledInput>
      <Label>{label}</Label>
      <Input
        {...register(label, { required: true })}
        htmlFor={label}
        id={label}
        $inputType={inputType}
      />
    </StyledInput>
  );
};

export default FormInput;
