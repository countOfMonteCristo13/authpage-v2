import { FC } from 'react';
import { StyledButton } from './buttonStyle';

export type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  type?: ButtonType;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: FC<ButtonProps> = ({
  type = 'primary',
  label,
  disabled = false,
  className = '',
  onClick,
}) => {
  return (
    <StyledButton
      $buttonType={type}
      className={className}
      $disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
