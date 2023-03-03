import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import LoginModal from '../Components/LoginModal';
import NavbarHeaderLogin from '../Components/NavbarHeaderLogin';

import { getLocalStorage } from '../Utils/localStorage';

const LoginPage = () => {
  const navigate = useNavigate();
  const authToken = getLocalStorage('authToken');

  useEffect(() => {
    if (authToken && authToken.length) {
      navigate('/jobs');
    }
  }, []);

  return (
    <Container>
      <NavbarHeaderLogin />
      <LoginModal />
    </Container>
  );
};

export default LoginPage;
