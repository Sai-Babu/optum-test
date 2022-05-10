
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import CustomQuestionLoader from './Components/Common/CustomQuestionLoader';

function App() {
  const [questionsData, setQuestionsData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/questions.json").then((response)=>{
      console.log(response);
      setQuestionsData(response.data);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
       <CustomQuestionLoader data={questionsData} />
      </header>
    </div>
  );
}

export default App;
