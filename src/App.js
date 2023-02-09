import './CSS/App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import LogIn from './components/LogIn'
import PathError from './components/PathError';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <LogIn/>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path="*" element={<PathError/>}/>
        <Route path="/articles" element={<Articles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
