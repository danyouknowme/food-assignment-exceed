import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { Index, FoodInfo } from './pages';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/recipes' element={<Index />}></Route>
        <Route path='/recipes/:recipeId' element={<FoodInfo />}></Route>
        <Route path='*' element={<Index />}></Route>
      </Routes>
    </div>
  );
};

export default App;
