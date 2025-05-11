import React from 'react'
import Home from './Components/Home'
import LatestCollections from './Components/Latest'
import Latest from './Components/Latest'
import Best from './Components/Best'
import Policy from './Components/Policy'
import NewsLetter from './Components/NewsLetter'

const page = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full'>
      <Home/>
      <Latest/>
     
      <Policy/>
      <NewsLetter/>
    </div>
  )
}

export default page