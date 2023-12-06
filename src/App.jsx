
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landingpage from './Pages/Landingpage';
import Home from './Pages/Home';
import Watchhistory from './Pages/Watchhistory';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        {/* localhost:3000 - Landingpage */}
        <Route path='/' element={<Landingpage/>}/>

        {/* localhost:3000/home */}
        <Route path='/home' element={<Home/>} />

        {/* localhost:3000/wathhistory */}
        <Route path='/wathch-history' element={<Watchhistory/>} />

      </Routes>

      <Footer/>
  
    </div>
  );
}

export default App;
