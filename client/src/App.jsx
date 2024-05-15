import List from './components/list.jsx'
import Create from './components/create.jsx'
// import Details from './components/details.jsx'
import Notfound from './components/Notfound.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Create />} />
        {/* <Route path='/' element={<Details />} /> */}
        <Route path='/show' element={<List />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
