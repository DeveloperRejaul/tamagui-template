import React, { createContext } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { Socket } from 'socket.io-client';

import config from '@config';
import type { IAppContext } from '@type/context';
import { store } from 'src/store/store';

export const Context = createContext({});

export default function AppContext({ children }: IAppContext) {

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;


  return (
    <Context.Provider value={{}}>
      <Provider store={store}>
        <TamaguiProvider config={config}>
          {children}
        </TamaguiProvider >
      </Provider>
    </Context.Provider>
  );
}
