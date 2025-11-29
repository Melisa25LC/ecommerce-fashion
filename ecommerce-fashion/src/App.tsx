import { useState, useEffect } from 'react';
import { HomeScreen } from './screens/HomeScreen';
import { CatalogScreen } from './screens/CatalogScreen';
import { FiltersScreen } from './screens/FiltersScreen';
import { ProductScreen } from './screens/ProductScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { ConfirmationScreen } from './screens/ConfirmationScreen';
import { UIKitScreen } from './screens/UIKitScreen';
import UIKitDemo from './ui-kit-demo';

type Screen = 'home' | 'catalog' | 'filters' | 'product' | 'cart' | 'checkout' | 'confirmation' | 'uikit' | 'uikit-full';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [screenData, setScreenData] = useState<any>(null);

  useEffect(() => {
    // Forzar modo oscuro permanente
    document.documentElement.classList.add('dark');
  }, []);

  const navigate = (screen: Screen, data?: any) => {
    setCurrentScreen(screen);
    setScreenData(data);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'uikit-full':
        return <UIKitScreen />;
      case 'uikit':
        return <UIKitDemo />;
      case 'home':
        return <HomeScreen onNavigate={navigate} />;
      case 'catalog':
        return <CatalogScreen onNavigate={navigate} data={screenData} />;
      case 'filters':
        return <FiltersScreen onNavigate={navigate} />;
      case 'product':
        return <ProductScreen onNavigate={navigate} data={screenData} />;
      case 'cart':
        return <CartScreen onNavigate={navigate} data={screenData} />;
      case 'checkout':
        return <CheckoutScreen onNavigate={navigate} />;
      case 'confirmation':
        return <ConfirmationScreen onNavigate={navigate} data={screenData} />;
      default:
        return <HomeScreen onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto bg-black">
      {renderScreen()}
    </div>
  );
}
