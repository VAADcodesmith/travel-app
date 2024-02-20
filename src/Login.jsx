import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, FormControl, Input, Button, Flex, Text } from '@chakra-ui/react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }
    // Retrieve user information from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // User found in local storage, navigate to Map page
      navigate('/map');
    } else {
      // User not found in local storage, navigate to Signup page
      navigate('/signup');
    }
  };

    const handleSignup = () => {
      navigate('/signup');
    };

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box bg="brand.bg" p={5} borderRadius="10px">
        <Heading color="brand.text" mb={5}>Vacation - Destination</Heading>
        <FormControl as="form" onSubmit={handleLogin} mb={5} borderRadius="10px">
          <Input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" mb={3} />
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" mb={3} />
          <Button type="submit" colorScheme="brand">Log in</Button>
          <Button onClick={handleSignup} colorScheme="brand" mt={3}>Sign Up</Button>
        </FormControl>
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </Box>
    </Flex>
  );
}

export default Login;