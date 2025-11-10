import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import PrivacyAndPolicy from './pages/PrivacyandPolicy'
import TermsandConditions from './pages/TermsAndConditions'
import CancellationRefundPolicy from './pages/CancellationRefund';
import Support from './pages/Support';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/privacy-and-policy' element={<PrivacyAndPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsandConditions />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </>
  )
}

export default App
