import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Layout from "./components/Layout";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="/user/:userId"
            element={<Profile />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
