import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Result = ({ name, score }) => {
   const navigate = useNavigate()
   
  

  return (
    <div className='flex h-screen items-center justify-center flex-col'>
       <h1 className='text-4xl font-light'>Final Result</h1>
       <span className='mt-4'>Your score is {score} Congratulations!</span>
       <Button
         variant="contained"
         color="success"
         size="large"
         style={{ alignSelf: "center", marginTop: 20 }}
         href="/"
         >
         Go back to Homepage
       </Button>
    </div>
  )
}

export default Result
