import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Home from "./components/home/home";
import About from "./components/about/about";

const App = () => {
  return (
    <Routes>
      <Route index element={<Navigation />} />
    </Routes>
  );
};

export default App;
