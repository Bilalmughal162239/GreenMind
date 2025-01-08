import React from 'react';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { ConfigProvider } from "antd";
import './App.scss';
import Routes from './Pages/Routes'
import { useAuthContext } from './context/Auth';
import ScreenLoader from './components/ScreenLoader';
function App() {
  const { isAppLoading } = useAuthContext()
  return (
    <>
      <ConfigProvider theme={{ token: { colorPrimary: "#1d3557" } }}>
        {isAppLoading
          ? <ScreenLoader />
          : <Routes />
        }
      </ConfigProvider>
    </>
  );
}

export default App;
