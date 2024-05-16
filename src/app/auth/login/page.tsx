import React from 'react'

function LoginPage() {
  return (
    <div className='flex items-center justify-center mt-20 flex-col'>
        <p className='text text-3xl text-blue-700'>LoginPage</p>

         <div className='flex flex-col justify-start items-center mt-20 '>
            <input type="text"  placeholder='email' className='border border-gray-300 rounded-md px-4 py-2  my-2 focus:outline-none focus:border-blue-500'/>
            <input type="text" placeholder='password' className='border border-gray-300 round-md px-4 py-2  mb-2 focus:outline-none focus:border-blue-500' />
            <button className= " mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Connect </button>


         </div>
    </div>
  )
}

export default LoginPage