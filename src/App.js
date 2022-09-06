import React from 'react';
import StackNavigation from './routes';
import {NavigationContainer} from '@react-navigation/native';
import linking from './routes/linking';

export default App = () => {
  return (
    <>
      <NavigationContainer linking={linking}>
        <StackNavigation />
      </NavigationContainer>
    </>
  );
};
