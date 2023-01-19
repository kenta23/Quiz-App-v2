import { CircularProgress } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import Question from '../Question';
import Result from './Result';
import {Routes, Route, Outlet } from 'react-router-dom'

const Quiz = ({name, score, setScore, questions, setQuestions}) => {
   const [currentQuestion, setCurrentQuestion] = useState(0)
   const [option, setOption] = useState()
   
    useEffect(() => {
        setOption(
          questions && 
           shuffle([
            questions[currentQuestion]?.correct_answer, 
            ...questions[currentQuestion]?.incorrect_answers, 
        ])
      );
    }, [questions, currentQuestion]);

    console.log(questions)

    const shuffle = (option) => {
       return option.sort(() => Math.random() - 0.5);
    };

  return (
    <div className='flex items-center flex-col'>
      <div className='text-center mx-auto mt-10'>
         <span className='px-4 py-2 shadow-xl bg-white text-2xl'>Welcome {name}!</span>
      </div>

    {questions ? (
    <>
      <div className='mt-10 uppercase font-light flex justify-between w-full items-center'>
        <span>{questions[currentQuestion].category}</span>
        <span>Score: {score}</span>
      </div>

      <Question 
         currentQuestion={currentQuestion}
         setCurrentQuestion={setCurrentQuestion}
         questions={questions}
         option={option}
         correct={questions[currentQuestion]?.correct_answer}
         score={score}
         setScore={setScore}
         setQuestions={setQuestions}
      />
    </>
    ) : (
      <CircularProgress 
         size={150}
         color='inherit'
         thickness={1}
         className='mt-20'
      />
    )}

   
    </div>
  )
}

export default Quiz
