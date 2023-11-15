import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { FC } from 'react';
import AuthModalFooter from '../AuthModalFooter/AuthModalFooter';
import FormInput from '../../atoms/Input/FormInput';

const schema = yup.object({
  email: yup
    .string()
    .email('Email format is not valid')
    .required('Email is required'),
  password: yup
    .string()
    .min(3, 'Minimum length is 3')
    .max(12, 'Maximum length is 12')
    .required('Password is required'),
});

type Inputs = {
  email: string;
  password: string;
};

type AuthModalFormProps = {
  toggleModal: (action: string) => void;
  primaryBtn: string;
  secondaryBtn: string;
  redirectModalLink: string;
};

const AuthModalForm: FC<AuthModalFormProps> = ({
  toggleModal,
  primaryBtn,
  secondaryBtn,
  redirectModalLink,
}) => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  };

  return (
    <ModalForm>
      <FormInput label="email" register={register} />
      <FormInput label="password" inputType="password" register={register} />
      <AuthModalFooter
        primaryBtn={primaryBtn}
        secondaryBtn={secondaryBtn}
        redirectModalLink={redirectModalLink}
        toggleModal={toggleModal}
        onSubmit={handleSubmit(onSubmit)}
      />
    </ModalForm>
  );
};

const ModalForm = styled.form`
    width:100%
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export default AuthModalForm;
