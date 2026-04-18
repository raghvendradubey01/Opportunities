import React from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { LoginScreen } from './screens/LoginScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { HomeScreen } from './screens/HomeScreen';
import { DetailScreen } from './screens/DetailScreen';
import { SavedScreen } from './screens/SavedScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { TopNavBar } from './components/TopNavBar';
import { ToastNotification } from './components/ToastNotification';

const AppContent: React.FC = () => {
  const { currentScreen } = useAppContext();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen />;
      case 'onboarding':
        return <OnboardingScreen />;
      case 'home':
        return <HomeScreen />;
      case 'detail':
        return <DetailScreen />;
      case 'saved':
        return <SavedScreen />;
      case 'notifications':
        return <NotificationsScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="app-container">
      <TopNavBar />
      <main className="main-content">
        {renderScreen()}
      </main>
      <ToastNotification />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
