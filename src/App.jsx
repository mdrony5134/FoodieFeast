import { AnimatePresence } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateItem from "./pages/CreateItem";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <AnimatePresence>
          <Header />
          <main className="mt-14 md:mt-20 px-4 py-7 md:px-16 md w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-item" element={<CreateItem />} />
            </Routes>
          </main>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
