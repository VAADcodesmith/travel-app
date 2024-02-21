import React, { useState } from 'react';
import {
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Button,
  FormHelperText,
  chakra,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignupForm = ({ onSubmit }) => {
  // state variables to store username, pw, show/hide pw, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!username || !password) { //check if username and password are empty
      setErrorMessage('Username and password are required');
      return;
    }
    // check if password meets minimum length requirement
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    // call onSubmit callback with user input
    onSubmit({ username, password });
  };

  //JSX for the signup form
  return (
    <form onSubmit={handleSignUp}>
      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" minH="200px" borderRadius="10px">
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />}/>
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
            <Input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>{showPassword ? "Hide" : "Show"}</Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          {errorMessage && <FormHelperText color="red.500">{errorMessage}</FormHelperText>}
        </FormControl>
        <Button borderRadius="9px" type="submit" variant="solid" colorScheme="brand" width="full">Sign Up</Button>
      </Stack>
    </form>
  );
  
};

export default SignupForm;
