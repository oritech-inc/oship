import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './layouts/pages/Home'
import Nearby from './layouts/pages/Nearby'
import Accounts from './layouts/pages/Accounts'
import LiveMap from './layouts/pages/LiveMap'
import { AppData } from './data'
import './App.css'
import './files'

function App() {
  // const app_data = AppData() === "" ? JSON.parse(AppData()) : []
  console.log(AppData[0])
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nearby' element={<Nearby />} />
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/live' element={<LiveMap />} />
      </Routes>
    </Router>
  )
}

export default App
