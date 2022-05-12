
import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {BrowserRouter , Routes,Route} from "react-router-dom";
// import {Routes,Route} from 'react-router';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result'
import {useState} from "react"
import axios from "axios"

function App() {

  const [name,setName]=useState("")
  const [questions,setQuestions]=useState()
  const [score,setScore]=useState(0)
   
  const fetchQuestions=async(category="",difficulty="")=>{
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=7${
        `&category=${category}`
      }${`&difficulty=${difficulty}`}&type=multiple`
    );
    
    setQuestions(data.results)
    }

  return (
    <BrowserRouter>
    {/* style={{backgroundImage:"url(./bgImage.jpg)"}} */}
    <div className="app" >
    <Header/>
    <Routes>
    <Route path="/" exact element={
    <Home name={name}
     setName={setName}
     fetchQuestions={fetchQuestions}/>
     }
    />

    <Route path="/quiz" element={
    <Quiz
    name={name}
    score={score}
    setScore={setScore}
    questions={questions}
    setQuestions={setQuestions}
    />
    }
    />
    <Route path="/result" element={
    <Result
    name={name}
    score={score}
    />
    }
    />
    </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
