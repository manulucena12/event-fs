import { useEffect } from "react";
import { LoginPage } from "./pages/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/register";
import { EventsPage } from "./pages/events";
import { AppDispatch, RootState } from "./redux/store";
import { NavBar } from "./components/Navbar";
import { getEventsAction } from "./redux/actions/events";
import { SingleEventPage } from "./pages/single";
import { UserPage } from "./pages/user";
import { DeleteUserPage } from "./pages/delete";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  useEffect(() => {
    dispatch(getEventsAction());
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
          <Route path="/event/:eventId" element={<SingleEventPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route
            path="/eliminate"
            element={user ? <DeleteUserPage /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
