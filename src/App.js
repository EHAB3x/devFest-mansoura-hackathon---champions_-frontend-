// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/main components/Navbar/Header';
import Landing from './components/Pages/Home/Landing/Landing';
import About from './components/Pages/Home/About/About';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
          <Landing />
          <About />
          </>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
