// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/main components/Navbar/Header';
import Landing from './components/Pages/Home/Landing/Landing';
import About from './components/Pages/Home/About/About';
import Articles from './components/Pages/Home/Articles/Articles';
import Products from './components/Pages/Home/Products/Products';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
          <Landing />
          <About />
          <Articles />
          <Products />
          </>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
