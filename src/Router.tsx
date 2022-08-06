import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Router;
