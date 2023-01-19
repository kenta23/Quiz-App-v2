import { InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { useState } from 'react'
import Categories from '../Data';
import { useNavigate } from 'react-router-dom';



const Home = ({ name, setname, fetch }) => {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const startQuiz = () => {
      if(!name || !category || !difficulty) {
        setError(true)
        return;
      }
      else {
        setError(false)
        fetch(category, difficulty)
        navigate('quiz')
      }
  }
  return (
    <div>  
<section className="text-gray-600 body-font">
  <div className="container px-2 py-20 mx-auto">
    <div className="grid grid-rows-2 text-center w-full">
      <img src="quiz img.svg" alt="" className='w-80 col-span-12 mx-auto'/>
     
     <div className='col-span-12 mx-auto mt-10'>
       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Quiz Settings</h1>
       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Test your knowledge by taking this Quiz</p>
      </div> 
      
    </div>
    <div className="flex lg:w-2/3  sm:flex-col flex-col mx-auto space-y-4 sm:px-0 items-center justify-center">
      <div className="relative flex-grow w-2/3">
   
     { error &&
         <div className='p2 mb-5 w-full'><span className='bg-red-600 text-white text-center p-3'>Please Fill up all the fields</span></div>
     } 
        
        <TextField   
          label="Name"
          variant='outlined'
          className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
          onChange={(e) => setname(e.target.value)}
       />
      </div>
   <div className="relative flex-grow w-2/3">
      <TextField 
        select
        label='Select Category'
        variant='outlined'
        className="mb-10 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
     >
       {Categories.map((item) => (
           <MenuItem key={item.category} value={item.value}>
             {item.category}
          </MenuItem>
       ))}
     </TextField>
   </div>

      <div className="relative flex-grow w-2/3">
      <TextField 
        select
        label='Select Category'
        variant='outlined'
        className="mb-12 w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        onChange={(e) => setDifficulty(e.target.value)}
        value={difficulty}
     >
       <MenuItem key='Easy' value='easy'>Easy</MenuItem>
       <MenuItem key='Medium' value='medium'>Medium</MenuItem>
       <MenuItem key='Hard' value='hard'>Hard</MenuItem>
     </TextField>
      </div>

      <div className="relative flex-grow w-2/3">     
       <button onClick={startQuiz} className="w-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition ease-in-out duration-300">Continue</button>
     </div>

      
    </div>
  </div>
</section>


</div>
  )
}

export default Home
