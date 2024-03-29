import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Main from "./components/Main/Main";
import "./App.css";
import "./vendor/normalize.css";
import "./vendor/fonts/fonts.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <div className="root">
        <Helmet>
          <html lang="en" />
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Customer Table</title>
        </Helmet>
        <div className="page">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace={true} />} />
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
