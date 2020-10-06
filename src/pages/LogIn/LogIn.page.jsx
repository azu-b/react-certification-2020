import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../state';
import {
  Container,
  Title,
  LogInContainer,
  InputTitle,
  InputBox,
  Button,
  Error,
} from './LogIn.styled';
import LoginAPI from '../../utils/login';
import { loginTitle, buildTitle } from '../../utils/pagesTitles';

const LogIn = () => {
  document.title = buildTitle(loginTitle);
  const { login } = useAuth();
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [wrongCredentials, setWrongCredentials] = useState(false);

  const handleInputChange = (event, setInputValue) => {
    setInputValue(event.target.value);
  };

  const tryAuthentication = (event) => {
    event.preventDefault();
    const tryingCredentials = async () => {
      try {
        const response = await LoginAPI(user, password);
        login(response);
        setWrongCredentials(false);
        history.push('/');
      } catch (error) {
        setWrongCredentials(true);
      }
    };

    tryingCredentials();
  };

  return (
    <Container>
      <Title>Log In</Title>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      {wrongCredentials && <Error>Credentials are incorrect 😱</Error>}
      <LogInContainer onSubmit={tryAuthentication}>
        <InputTitle>
          <span>User:</span>
          <InputBox
            name="user"
            value={user}
            onChange={(event) => handleInputChange(event, setUser)}
          />
        </InputTitle>
        <InputTitle>
          <span>Password:</span>
          <InputBox
            name="password"
            type="password"
            value={password}
            onChange={(event) => handleInputChange(event, setPassword)}
          />
        </InputTitle>
        <Button>Log In</Button>
      </LogInContainer>
    </Container>
  );
};

export default LogIn;
