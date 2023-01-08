import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './layout/Header';
import HomePage from './pages/HomePage';
import Navbar from "./layout/Navbar"
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/articles' element={<ArticleListPage />} />
          <Route path='/articles/:articleId' element={<ArticlePage />} />
    <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Navbar />
      </Router>

    </div>
  );
}

export default App;
