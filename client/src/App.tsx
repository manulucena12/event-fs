import { useEffect } from "react";
import { LoginPage } from "./pages/login";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/reducers/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = window.localStorage.getItem("User");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
