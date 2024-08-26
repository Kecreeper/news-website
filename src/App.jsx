import { useState } from 'react'
import Header from './components/header'

function NewsArticle() {


  return (
    <div className='place-self-center max-w-xl py-5 px-10 bg-gray-400 '>
      <img src='/news-website/img/news1.png' className='size-12' />

    </div>
  );
}


function App() {
  return (
    <>
      <Header />
      <div className='grid grid-cols-1 auto-rows-max gap-5'>
        <NewsArticle />
        <NewsArticle />
        <NewsArticle />
      </div>
    </>
  )
}

export default App
