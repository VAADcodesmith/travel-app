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
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      navigate('/map');
    } else {
      navigate('/signup');
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <FormControl> {/* Wrap the entire form in FormControl */}
      <form onSubmit={handleLogin}>
        <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md" minH="200px" borderRadius="10px">
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<CFaUserAlt color="gray.300" />}/>
            <Input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="gray.300" children={<CFaLock color="gray.300" />}/>
            <Input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowClick}>{showPassword ? "Hide" : "Show"}</Button>
            </InputRightElement>
          </InputGroup>
          {errorMessage && <FormHelperText color="red.500">{errorMessage}</FormHelperText>}
          <Button borderRadius="9px" type="submit" variant="solid" colorScheme="brand" width="full">Login</Button>
        </Stack>
      </form>
    </FormControl>
  );
};

export default LoginForm;
