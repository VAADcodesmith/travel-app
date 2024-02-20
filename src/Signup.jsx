import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Heading, FormControl, Input, Button, Flex, Text } from '@chakra-ui/react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

const handleSignUp = event => {
  event.preventDefault();
  if (!username || !password) {
    setErrorMessage('Username and password are required');
    return;
  }
  // Store user information in local storage
  const user = {
    username: username,
    password: password,
    locations: []
  };
  localStorage.setItem('user', JSON.stringify(user));
  navigate('/map');
};

  return (
    <Flex minHeight="100vh" alignItems="center" justifyContent="center">
      <Box bg="brand.bg" p={5} borderRadius="10px">
        <Heading color="brand.text" mb={5}>Vacation - Destination</Heading>
        <FormControl as="form" onSubmit={handleSignUp} mb={5} borderRadius="10px">
          <Input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" mb={3} />
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" mb={3} />
          <Button type="submit" colorScheme="brand">Sign Up</Button>
        </FormControl>
        {errorMessage && <Text color="red.500">{errorMessage}</Text>}
      </Box>
    </Flex>
  );
}

export default Signup;