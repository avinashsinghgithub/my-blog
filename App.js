import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./src/pages/HomePage";
import AboutPage from "./src/pages/AboutPage";
import ArticlesListPage from "./src/pages/ArticlesListPage";
import ArticlePage from "./src/pages/ArticlePage";
import NotFoundPage from "./src/pages/NotFoundPage";
import LoginPage from "./src/pages/LoginPage";
import CreateAccountPage from "./src/pages/CreateAccountPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
