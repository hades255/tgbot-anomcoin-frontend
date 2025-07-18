import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { initBackButton } from "@telegram-apps/sdk";

import { AuthProvider } from "@contexts/AuthContext";
import { SoundProvider } from "@contexts/SoundContext";
import CoinHelper from "@helper/coin";
import store from "@redux/store";
import LoadingIcon, { LoadingDrop } from "@icons/loading";
import "./App.css";

const Maintenance = lazy(() => import("@pages/Maintenance"));
const Home = lazy(() => import("@pages/Home"));
const Profile = lazy(() => import("@pages/Profile"));
const Build = lazy(() => import("@pages/Build"));
const Me = lazy(() => import("@pages/Me"));
const Task = lazy(() => import("@pages/Task"));
const Frens = lazy(() => import("@pages/Frens"));
const Squad = lazy(() => import("@pages/Squad"));
const SquadHome = lazy(() => import("@pages/SquadHome"));

function App() {
  const [str, setStr] = useState(null);

  const location = useLocation();

  useEffect(() => {
    try {
      const [backButton] = initBackButton();
      backButton.on("click", () => {
        window.history.back();
      });

      const updateBackButtonVisibility = () => {
        if (location.pathname === "/") {
          backButton.hide();
        } else {
          backButton.show();
        }
      };

      updateBackButtonVisibility();

      return () => {
        backButton.hide();
      };
    } catch (error) {
      // console.log(error);
    }
  }, [location]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const initData = window.Telegram.WebApp.initData;
      setStr(initData);
      window.Telegram.WebApp.setHeaderColor("#0f1f39");
    }
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <CoinHelper />
        <SoundProvider>
          <Suspense fallback={<LoadingDrop />}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {str && <Home params={str} />}
                    {!str && <Home params={null} />}
                    <Maintenance />
                  </>
                }
              />
              <Route path="/tasks" element={<Task />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/frens" element={<Frens />} />
              <Route path="/build" element={<Build />} />
              <Route path="/me" element={<Me />} />
              <Route path="/squad" element={<Squad />} />
              <Route path="/squadhome" element={<SquadHome />} />
            </Routes>
          </Suspense>
        </SoundProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
