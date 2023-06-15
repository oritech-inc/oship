import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './layouts/pages/Index'
import Nearby from './layouts/pages/Nearby'
import Accounts from './layouts/pages/Accounts'
import LiveMap from './layouts/pages/LiveMap'
import './App.css'
import './files'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/nearby' element={<Nearby />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/live' element={<LiveMap />} />
      </Routes>
    </Router>
  )
}


export default App
