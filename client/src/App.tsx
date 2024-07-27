import { useEffect } from "react";
import { LoginPage } from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register";
import { EventsPage } from "./pages/events";
import { RootState } from "./redux/store";
import { NavBar } from "./components/Navbar";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    const user = window.localStorage.getItem("User");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        {user && <NavBar />}
        <Routes>
          <Route path="/" element={user ? <EventsPage /> : <LoginPage />} />
          <Route
            path="/register"
            element={user ? <EventsPage /> : <RegisterPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
