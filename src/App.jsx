import { useState, useEffect } from 'react';
import Header from './components/header'
import ArticleData from '/data.json?url'

function NewsArticle(data) {
  const text = data.data.text
  console.log(data)

  return (
    <div className='place-self-center max-w-xl py-5 px-10 bg-gray-400 '>
      <img src='/news-website/img/news1.png' className='size-12' />
      {text}
    </div>
  );
}



function App() {
  const [data, setData] = useState(null)
  const retrieveData = async () => {
    const response = await fetch(ArticleData);
    const result = await response.json();
    setData(result);
  };

  useEffect(function() {
    retrieveData();
  }, []);

  return (
    <>
      <Header />
      <div className='grid grid-cols-1 auto-rows-max gap-5'>
        {data && 
          data.articles.map((article) => (
            <NewsArticle key={article.name} data={article} />
          ))
        }
        
      </div>
    </>
  )
}

export default App
