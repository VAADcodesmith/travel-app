import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Avatar,
  Box,
  Link,
} from "@chakra-ui/react";
import SignupForm from './SignupForm';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = ({ username, password }) => {
    // Store user information in local storage
    const user = {
      username: username,
      password: password,
      locations: []
    };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/map');
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <Flex flexDirection="column" width="100wh" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
      <Box>
        <Avatar src="../assets/images/img.png" size="2xl" />
        <Heading color="brand.text">USA Travel Map</Heading>
      </Box>
      <Box minW={{ base: "90%", md: "468px" }} >
        <SignupForm onSubmit={handleSignup} />
      </Box>
      <Box>
        Welcome!{' '}
        <Link color="brand.bg" onClick={handleLogin}>Login</Link>
      </Box>
    </Flex>
  );
};

export default Signup;