import { FC } from 'react';
import Button from '../../atoms/Button/Button';
import Navbar from '../../moleculs/Navbar/Navbar';
import { AuthWrapper, HeaderWrapper, LogoWrapper } from './Header.styles';

type HeaderProps = {
  openModal: (action: string) => void;
};

const Header: FC<HeaderProps> = ({ openModal }) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>Logo</LogoWrapper>
      <Navbar />
      <AuthWrapper>
        <Button
          label="Sign In"
          className=""
          type="primary"
          disabled={false}
          onClick={() => openModal('Sign in')}
        />
        <Button
          label="Register"
          className=""
          type="secondary"
          disabled={false}
          onClick={() => openModal('Sign up')}
        />
      </AuthWrapper>
    </HeaderWrapper>
  );
};

export default Header;
