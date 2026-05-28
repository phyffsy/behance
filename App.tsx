import React, { useState } from 'react';
import { LoginScreen } from './src/screens/LoginScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { DetailScreen } from './src/screens/DetailScreen';
import { OrderScreen } from './src/screens/OrderScreen';
import { SuccessScreen } from './src/screens/SuccessScreen';
import { ScreenName } from './src/types/navigation';

export default function App() {
  const [screen, setScreen] = useState<ScreenName>('login');
  const props = { go: setScreen };

  if (screen === 'login') return <LoginScreen {...props} />;
  if (screen === 'home') return <HomeScreen {...props} />;
  if (screen === 'detail') return <DetailScreen {...props} />;
  if (screen === 'order') return <OrderScreen {...props} />;
  return <SuccessScreen {...props} />;
}
