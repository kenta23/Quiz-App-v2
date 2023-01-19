import Header from "./Components/Header"
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import Quiz from "./Pages/Quiz"
import Result from "./Pages/Result"
import { useState } from "react"
import axios from 'axios'


function App() {
  const [name, setName] = useState('')
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = '', difficulty = '') => {
     const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`
     );
     
    setQuestions(data.results)
  }

  return (
    <div className="relative app font-Poppins bg-slate-600 w-full h-auto  border-4 p-2">
        <Header />
  <Routes>
    <Route path="/" element={<Home name={name} setname={setName} fetch={fetchQuestions}/>} exact/>
    <Route path="quiz" element={
      <Quiz 
       name={name}
       questions={questions}
       score={score}
       setScore={setScore}
       setQuestions={setQuestions} 
      />} exact>
    </Route>
    <Route path="/result" element={<Result  name={name} score={score} />} /> 
  </Routes>

  <Footer />
    </div>
  )
}

export default App
