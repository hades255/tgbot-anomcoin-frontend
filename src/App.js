import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import { AuthProvider } from "./contexts/AuthContext";
import { queryStringToObject } from "./helper/func";
import LoadingIcon from "./assets/icons/loading";
import "./App.css";

function App() {
  const [str, setStr] = useState(null);

  useEffect(() => {
    const setTitle = () => {
      // const title = "Alphanomics";

      if (window.Telegram && window.Telegram.WebApp) {
        const initData = window.Telegram.WebApp.initData;
        setStr(queryStringToObject(initData));
        window.Telegram.WebApp.setHeaderColor("#0f1f39");
        // window.Telegram.WebApp.MainButton.setText(title);
        // window.Telegram.WebApp.MainButton.setParams({
        //   text_color: "#000713",
        //   color: "#0B1423",
        // });

        // window.Telegram.WebApp.MainButton.show();
      }
    };

    setTitle();
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Suspense
            fallback={
              <div className="fixed top-0 left-0 z-20 w-full h-screen bg-[#000000] opacity-80 flex justify-center items-center">
                <div className="animate-spin">
                  <LoadingIcon />
                </div>
              </div>
            }
          >
            <Routes></Routes>
          </Suspense>
        </Router>
        <div className="App"></div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
