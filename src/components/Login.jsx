import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';

import {
  Flex,
  Heading,
  Avatar,
  Box,
  Stack,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <Flex flexDirection="column" width="100wh" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
        <Avatar src="../assets/images/img.png" size="2xl" />
        <Heading color="brand.text">USA Travel Map</Heading>
        <Box minW={{ base: "90%", md: "468px" }} >
          <LoginForm />
        </Box>
      </Stack>
      <Box mt={4}>
        New to us?{' '}
        <Link color="brand.bg" onClick={handleSignup}>
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
