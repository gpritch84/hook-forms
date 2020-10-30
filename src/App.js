import './App.css';
import React from 'react';
import HookForm from './components/HookForm'

function App() {
  return (
    <div className="App">
      <HookForm 
      firstName= 'firstName' 
      lastName='lastName' 
      email='email' 
      password='password' 
      conPassword='conPassword' 
      firstNameError='firstNameError' 
      lastNameError= 'lastNameError' 
      emailError='emailError' 
      passwordError='passwordError' 
      conPasswordError='conPasswordError'
      />
    </div>
  );
}

export default App;
