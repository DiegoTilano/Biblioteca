import React from 'react';
import { UserProvider } from './context/UserContext';
import Navigation from './Navigation';

export default function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}

