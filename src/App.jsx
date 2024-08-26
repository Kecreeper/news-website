import { useState, useEffect } from 'react';
import Header from './components/header'
import ArticleData from '/data.json?url'

function NewsArticle(data) {
  data = data.data
  const heading = data.heading
  const subheading = data.subheading

  const redirect = () => {
    location.href='asdfasdf'
  }

  return (
    <div onClick={redirect} className='flex justify-start items-center mx-auto max-w-screen-md p-4 border-y-2 bg-gray-100'>
      <img src='/news-website/img/news2.png' className='inline size-24' />
      <div className='inline ml-4 text-2xl'>
        <div>
          {heading}
        </div>
        <div className='text-lg font-thin'>
          {subheading}
        </div>
      </div>
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
      <div className='bg-white mx-auto max-w-screen-md min-h-screen'>
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
