import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()
   

  return (
    <div className='flex flex-col items-center justify-center space-y-8'>
      <h1 className='mt-4 text-bold text-4xl'>Name : {data.name} </h1>
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubLoader = async () => {
    const response = await fetch('https://api.github.com/users/iamsahil1309')
    return response.json()
}