import Create from './components/create.jsx';
import NotFound from './components/Notfound.jsx';
import Details from './components/details.jsx'; // Import the Details component
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/player/:id' element={<Details />} /> {/* Add this route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
