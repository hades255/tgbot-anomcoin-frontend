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

function App() {
  const [str, setStr] = useState(null);

  const location = useLocation();

  useEffect(() => {
    //  todo backbutton
    // return;
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
            </Routes>
          </Suspense>
        </SoundProvider>
      </AuthProvider>
    </Provider>
  );
}

export default App;

/*
const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  if (isAuthenticated) return children;
  navigate(
    `/?refer=#tgWebAppData=query_id%3DAAGe0mImAwAAAJ7SYibwwoj_%26user%3D%257B%2522id%2522%253A7086461598%252C%2522first_name%2522%253A%2522smart%2522%252C%2522last_name%2522%253A%2522guy%2522%252C%2522username%2522%253A%2522z_sm_001%2522%252C%2522language_code%2522%253A%2522en%2522%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1725212678%26hash%3D7cbc81eef8a466d9d64a16d5edc55449197b9da21dda9067e0110203dbf7aa7b&tgWebAppVersion=7.6&tgWebAppPlatform=android&tgWebAppThemeParams=%7B"bg_color"%3A"%23ffffff"%2C"section_bg_color"%3A"%23ffffff"%2C"secondary_bg_color"%3A"%23f0f0f0"%2C"text_color"%3A"%23222222"%2C"hint_color"%3A"%23a8a8a8"%2C"link_color"%3A"%232678b6"%2C"button_color"%3A"%2350a8eb"%2C"button_text_color"%3A"%23ffffff"%2C"header_bg_color"%3A"%23527da3"%2C"accent_text_color"%3A"%231c93e3"%2C"section_header_text_color"%3A"%233a95d5"%2C"subtitle_text_color"%3A"%2382868a"%2C"destructive_text_color"%3A"%23cc2929"%2C"section_separator_color"%3A"%23d9d9d9"%7D`
  );
};
*/
