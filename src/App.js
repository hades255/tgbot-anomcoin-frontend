import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { initBackButton } from "@telegram-apps/sdk";

import store from "./redux/store";
import { AuthProvider } from "./contexts/AuthContext";
import { SoundProvider } from "./contexts/SoundContext";
import LoadingIcon from "./assets/icons/loading";
import "./App.css";
import CoinHelper from "./helper/coin";

const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));
const Build = lazy(() => import("./pages/Build"));
const Me = lazy(() => import("./pages/Me"));
const Task = lazy(() => import("./pages/Task"));
const Frens = lazy(() => import("./pages/Frens"));
const Squad = lazy(() => import("./pages/Squad"));
const SquadHome = lazy(() => import("./pages/SquadHome"));

function App() {
  const [str, setStr] = useState(null);

  const location = useLocation();

  useEffect(() => {
    //  todo backbutton

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
                    {str && <Home params={str} />}
                    {!str && <Home params={null} />}
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
