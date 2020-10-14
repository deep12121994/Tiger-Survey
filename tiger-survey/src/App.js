import React,{useState} from 'react';
import LandingPage from './components/LandingPage';
import CreateServey from './components/Createsurvey';
import TakeSurvey from './components/TakeSurvey';
import './App.css';

function App() {
  const [flag, setFlag] = useState(0);
  const update=(value)=>{
    setFlag(value)
  }
  return (
    <div className="App">
      <div>
      {(flag===0) && <LandingPage update={update}/>}
      {flag===2 && <CreateServey/>}
      {flag===1 && <TakeSurvey/>}
      </div>
    </div>

  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
}

export default App;
