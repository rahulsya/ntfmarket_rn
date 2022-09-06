import React from 'react';
import StackNavigation from './routes';
import {NavigationContainer} from '@react-navigation/native';

export default App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};
