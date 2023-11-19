// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/main components/Navbar/Header';
import Landing from './components/Pages/Home/Landing/Landing';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
          <Landing />
          </>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
