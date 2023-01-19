import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const btnStyle = { backgroundColor: 'white',
                   borderRadius: '10px',
                   transition: 'all ease-in-out 200ms',
                   padding: '15px',
                   marginBottom: '25px',  
                   width: '40%', 
                   height: 'auto',
                   textTransform: 'uppercase'
               }


const Question = ({
    currentQuestion,
    setCurrentQuestion,
    questions,
    option,
    correct,
    score,
    setScore,
    setQuestions
}) => {
    const navigate = useNavigate();

    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)
    
const handleCheck = (item) => {
    setSelected(item);

  if(item === correct) 
     setScore(score + 1)
     setError(false)
};

const handleSelect = (item) => {
    if(selected === item && selected === correct) 
      return 'select';
  
    else if(selected === item && selected !== correct) 
      return 'wrong';
    
    else if (item ===selected) 
      return 'select';
    
};
const handleNext = () => {
    if(currentQuestion > 8) {
      navigate('/result')
    } else if(selected) {
      setCurrentQuestion(currentQuestion + 1)
      setSelected()
    } else {
      setError("Please select an option first")
    }
};

const handleQuit = () => {
    setCurrentQuestion(0)
    setQuestions()
}
  return (
    <div className='mt-7'>
       <h1 className='text-4xl font-semibold text-center'>Question {currentQuestion + 1}</h1>
       <div className='flex items-center flex-col'>
         
          <div className='mt-8 mx-6 text-center flex flex-col border-gray-600 border p-7 h-auto justify-center items-center'>
              <h2 className='sm:text-2xl font-light'>{questions[currentQuestion].question}</h2>
           
              <div className='flex flex-wrap justify-around w-full items-center mt-12 '>  
              { error &&
                 <div className='p2 mb-7 w-full'><span className='bg-red-600 w-80 text-white text-center p-2'>Please Select any choices</span></div>
              } 
               {option && option.map((item) => (
                 <button className={`singleOption ${selected && handleSelect(item)}`}
                   key={item}
                   onClick={() => handleCheck(item)}
                   disabled={selected}
                   >
                    {item}
                  </button>
               ))}
 
        <div className='mt-10 flex justify-evenly w-full mb-4'>
              <Button 
                variant="contained"
                color="secondary"
                size="large"
                style={{ width: 185 }}
                href="/"
               onClick={handleQuit}
              >
                 Quit
              </Button>
              <Button 
                variant="contained"
                color="success"
                size="large"
                style={{ width: 185 }}
                onClick={handleNext}
              >
                 Next
              </Button>
             </div>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Question
