import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

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

  const handleLogin = () =>{
    navigate('/');
  }
  
  return (
      <Flex flexDirection="column" width="100wh" height="100vh" backgroundColor="gray.200" justifyContent="center" alignItems="center">
        <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
          <Avatar src="img.png" size="2xl" />
          <Heading color="brand.text">USA Travel Map</Heading>
          <Box minW={{ base: "90%", md: "468px" }} >
            <form onSubmit={handleSignUp}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900"boxShadow="md" minH="200px" borderRadius="10px">
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />}/>
                    <Input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
                    <Input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>{showPassword ? "Hide" : "Show"}</Button>
                    </InputRightElement>
                  </InputGroup>
                <FormHelperText textAlign="right"/>
              </FormControl>
              {errorMessage && <Text color="red.500">{errorMessage}</Text>}
              <Button borderRadius="9px" type="submit" variant="solid" colorScheme="brand" width="full">Sign Up</Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>Welcome!{" "}
        <Link color="brand.bg" onClick={handleLogin}>Login</Link>
      </Box>
    </Flex>
  );
}

export default Signup;
