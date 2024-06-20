import React, { createContext, useContext, useState } from 'react';

// Create the context
const LoginContext = createContext();

// Create the provider component
export const LoginProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must include at least one capital letter.';
    }
    if (!/\d/.test(password)) {
      return 'Password must include at least one number.';
    }
    if (!/[@$!%*?&]/.test(password)) {
      return 'Password must include at least one special character.';
    }
    return '';
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else {
      const passwordValidationError = validatePassword(password);
      if (passwordValidationError) {
        setPasswordError(passwordValidationError);
        valid = false;
      } else {
        setPasswordError('');
      }
    }

    if (valid) {
      // Submit the form or perform the login action
      alert('Success');
      console.log('Form submitted');
      setEmail('');
      setPassword('');
      setPasswordError('');
      setEmailError('');
    }
  };

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        emailError,
        passwordError,
        handleSubmit,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useLogin = () => {
  return useContext(LoginContext);
};
