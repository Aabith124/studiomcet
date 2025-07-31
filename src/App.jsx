import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { BookNow } from './pages/BookNow';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
