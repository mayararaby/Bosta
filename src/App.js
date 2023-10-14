import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import withLocalize from './hoc/withLocalize';
import { useEffect } from 'react';
import { Error } from './pages/error/error';
function App({i18n}) {
  useEffect(()=>{
    i18n.changeLanguage('ar')
  },[])
  return (
    <div className="arabicDirection">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default withLocalize(App) ;

