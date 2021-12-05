import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AllBlogsPage from '../AllBlogsPage/AllBlogsPage';
import FitnessPage from '../FitnessPage/FitnessPage';
import FoodPage from '../FoodPage/FoodPage';

export default function App() {
  return (
    <main className="App">
      <>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/allblogs" element={<AllBlogsPage/>}/>
          <Route exact path="/fitness" element={<FitnessPage/>}/>
          <Route exact path="/food" element={<FoodPage/>}/>
        </Routes>
      </>
    </main>
  );
}

