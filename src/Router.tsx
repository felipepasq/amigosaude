import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
