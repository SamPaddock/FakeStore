import React, { useEffect } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import { RootStack } from './src/helper/navigation/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persister, store } from './src/helper/redux/store';

function App(): React.JSX.Element {

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
