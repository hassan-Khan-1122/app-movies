
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Toprated from './components/Api/Toprated';
import Footer from './components/Footer';
import Upcomming from './components/Upcomming';
import MovieDetail from './components/MoviesDetail';
import Page from './components/Page';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    
    
      <Routes>
        <Route path="/" element={<><Main /><Movies /></>}/>
        <Route path="/rated" element={<Toprated />}/>
        <Route path='/upcomming' element={<Upcomming/>}/>
        <Route path='/frontbtn'  element={<Page/>}/>
        <Route path="/movie/:id" element={<MovieDetail />} />
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
