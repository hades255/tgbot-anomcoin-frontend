import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { initBackButton } from "@telegram-apps/sdk";

import store from "./redux/store";
import { AuthProvider } from "./contexts/AuthContext";
import { SoundProvider } from "./contexts/SoundContext";
import { queryStringToObject } from "./helper/func";
import LoadingIcon from "./assets/icons/loading";
import "./App.css";
import Navbar from "./components/navbar";
import CoinHelper from "./helper/coin";

const Home = lazy(() => import("./pages/Home"));
const Task = lazy(() => import("./pages/Task"));

function App() {
  const [str, setStr] = useState(null);

  const location = useLocation();

  useEffect(() => {
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

    // Listen for location changes
    return () => {
      backButton.hide();
    };
  }, [location]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      const initData = window.Telegram.WebApp.initData;
      setStr(queryStringToObject(initData));
      window.Telegram.WebApp.setHeaderColor("#0f1f39");
    }
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <CoinHelper />
        <SoundProvider>
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-20 w-full h-screen bg-[#000000] opacity-80 flex justify-center items-center">
                <div className="animate-spin">
                  <LoadingIcon />
                </div>
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Navbar params={str} />
                  </>
                }
              />
              <Route path="/tasks" element={<Task />} />
            </Routes>
          </Suspense>
        </SoundProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;
